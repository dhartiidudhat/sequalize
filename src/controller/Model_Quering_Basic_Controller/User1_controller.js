import { sequelize } from "../../config/db.js";
import { Op } from "sequelize";
import user from "../../models/Model_Quering_Basic/user_model.js";

// Add those fields which are in fields
const addUserBasedOnFields = async (req, res) => {
  try {
    const { fname, lname } = req.body;
    const userData = await user.create(
      { fname: fname, lname: lname },
      { fields: ["lname"] }
    );

    res.status(201).json({
      message: "User Added Successfully!",
    });
  } catch (error) {
    console.log("---->error", error);
  }
};

const getUserBasedOnAttributes = async (req, res) => {
  try {
    const getUser = await user.findAll({
      attributes: ["fname", "lname", "id"],
    });
    res.status(201).json({
      message: "User found successfully!",
      user: getUser,
    });
  } catch (error) {
    console.log("Get user based on Attributes", error);
  }
};

const giveTheAlias = async (req, res) => {
  try {
    // Get the count

    const allCounts = await user.count();

    const totalRowResult = await user.findAll({
      attributes: [
        [sequelize.fn("COUNT", sequelize.col("lname")), "totalCounts"],
      ],
    });

    // get the alias
    const getTheAlias = await user.findAll({
      attributes: [
        ["fname", "first_name"],
        ["lname", "last_name"],
        "createdAt",
      ],
    });

    res.status(201).json({
      message: "get second Alias and Count Successfully!",
      allCounts: allCounts,
      count: totalRowResult,
      user: getTheAlias,
    });
  } catch (error) {
    console.log("second Alias controller", error);
  }
};

const includeExcludeData = async (req, res) => {
  try {
    const data = await user.findAll({
      attributes: {
        exclude: ["lname"],
        // include: ["lname"],
      },
    });

    res.status(201).json({
      data: data,
    });
  } catch (error) {
    console.log("Include exclude controller:- ", error);
  }
};

const userOperators = async (req, res) => {
  try {
    const userData = await user.findAll({
      // where: {
      //   id: 2,
      // },
      where: {
        // id: {
        //   [Op.eq]: 3,
        // },
        // fname: {
        //   [Op.eq]: "dharti",
        // },
        // [Op.and]: [{ fname: "dharti" }, { lname: "dudhat" }],
        // [Op.or]: [{ fname: "dharti" }, { lname: "dudhat" }],
        // Number comparisons
        // id: {
        // [Op.ne]: 4,
        // [Op.gt]: 7,
        // [Op.gte]: 7,
        // [Op.lt]: 7,
        // [Op.lte]: 7,
        // [Op.between]: [7, 9],
        // [Op.notBetween]: [7, 9],
        // [Op.all]: sequelize.literal("select 4"),
        // [Op.in]: [7, 10, 14],
        // [Op.notIn]: [7, 10],
        // },
        // -------------------->
        // Other ones
        // fname: {
        // [Op.like]: "%Dharti%",
        // },
        // -------------------->
        // multipal operators
        // [Op.or]: [
        //   {
        //     fname: {
        //       [Op.eq]: ["dharti"],
        //     },
        //   },
        //   {
        //     lname: {
        //       [Op.eq]: ["dudhat"],
        //     },
        //   },
        // ],
        // -------------------->
        // [Op.and]: [
        //   {
        //     fname: {
        //       [Op.eq]: ["dharti"],
        //     },
        //   },
        //   {
        //     lname: {
        //       [Op.eq]: ["dudhat"],
        //     },
        //   },
        // ],
        // -------------------->
        // fname: "dharti",
        // [Op.not]: [
        //   {
        //     id: {
        //       [Op.in]: [16],
        //     },
        //   },
        //   {
        //     lname: {
        //       [Op.like]: ["dudhat"],
        //     },
        //   },
        // ],
      },
    });

    const userTwoData = await user.findAll({
      where: sequelize.where(
        sequelize.fn("char_length", sequelize.col("fname")),
        {
          [Op.gt]: 7,
        }
      ),
    });
    res.status(201).json({
      user: userData,
      userTwo: userTwoData,
    });
  } catch (error) {
    console.log("User operator:- ", error);
  }
};

const orderGroup = async (req, res) => {
  try {
    const data = await user.findAll({
      order: [
        // ["fname"]
      ],
    });
    res.status(201).json({
      userData: data,
    });
  } catch (error) {
    console.log("Order & group by controller Error:- ", error);
  }
};

export {
  addUserBasedOnFields,
  getUserBasedOnAttributes,
  giveTheAlias,
  includeExcludeData,
  userOperators,
  orderGroup,
};
