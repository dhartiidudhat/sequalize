import { sequelize } from "../../config/db.js";
import { Op, where } from "sequelize";
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
        id: {
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
        },
        // -------------------->
        // Other ones
        // fname: {
        // [Op.like]: "%Dharti",
        // [Op.notLike]: "%dharti",
        // [Op.startsWith]: "h%",
        // [Op.endsWith]: "%t",
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
    // const maxAgeData = await user.findOne({
    // attributes: [[sequelize.fn("max", sequelize.col("age")), "maxAge"]],
    // });

    // const maxAge = await maxAgeData.get("maxAge");
    const data = await user.findAll({
      order: [
        // ["fname"],
        // ["fname", "DESC"],
        // ["age"],
        // [sequelize.col("lname"), "desc"],
      ],
    });

    const userData = await user.findAll({
      // attributes: [
      //   "fname", // Grouped column
      //   [sequelize.fn("MAX", sequelize.col("id")), "maxId"], // Aggregated column example
      //   [sequelize.fn("MAX", sequelize.col("lname")), "maxLname"], // Aggregated column example
      //   [sequelize.fn("MAX", sequelize.col("age")), "maxAge"], // Aggregated column example
      //   [sequelize.fn("MAX", sequelize.col("createdAt")), "maxCreatedAt"], // Aggregated column example
      //   [sequelize.fn("MAX", sequelize.col("updatedAt")), "maxUpdatedAt"], // Aggregated column example
      // ],
      // group: ["fname"], // Group by column
      // order: [["fname", "desc"]], // Optional: to order the grouped

      attributes: [
        "fname",
        // ["fname", "foirst_Name"],
        [sequelize.fn("count", sequelize.col("age")), "totalAge"],
      ],
      group: ["fname"],
      order: [["fname", "desc"]],
    });

    console.log("=====> userData:", userData);
    res.status(201).json({
      data: data,
      userData: userData,
    });
  } catch (error) {
    console.log("Order & group by controller Error:- ", error);
  }
};
const userLimit = async (req, res) => {
  try {
    const twoUserData = await user.findAll({
      limit: 2,
    });

    const skipTwoUser = await user.findAll({
      offset: 2,
    });
    const userPagination = await user.findAll({
      offset: 2,
      limit: 2,
    });

    const userCountData = await user.count({
      where: {
        age: {
          [Op.gt]: 23,
        },
      },
    });

    res.status(201).json({
      userData: twoUserData,
      useSkip: skipTwoUser,
      userPagination: userPagination,
      userCountData: userCountData,
    });
  } catch (error) {
    console.log("user Limit:-", error);
  }
};
const aggregation = async (req, res) => {
  try {
    const minUser = await user.min("age");

    const maxUser = await user.max("age");
    const userSum = await user.sum("age");

    const minUserData = await user.min("age", {
      where: {
        age: {
          [Op.gt]: 22,
        },
      },
    });

    const maxUserData = await user.max("age", {
      where: {
        age: {
          [Op.lt]: 26,
        },
      },
    });

    const userIncrement = await user.increment(
      { age: 21 },
      { where: { id: 1 } }
    );

    const afterIncrementUser = await user.findOne({
      where: {
        id: {
          [Op.eq]: 1,
        },
      },
    });

    const userAgeDecrement = await user.increment(
      { age: -20 },
      { where: { id: 1 } }
    );

    const userAfterDecrement = await user.findOne({
      where: {
        id: {
          [Op.eq]: 1,
        },
      },
    });

    res.status(201).json({
      minUser: minUser,
      maxUser: maxUser,
      userSum: userSum,
      minUserData: minUserData,
      maxUserData: maxUserData,
      userAfterIncrement: afterIncrementUser,
      userAfterDecrement: userAfterDecrement,
    });
  } catch (error) {
    console.log("aggregation functions:", error);
  }
};
export {
  addUserBasedOnFields,
  getUserBasedOnAttributes,
  giveTheAlias,
  includeExcludeData,
  userOperators,
  orderGroup,
  userLimit,
  aggregation,
};
