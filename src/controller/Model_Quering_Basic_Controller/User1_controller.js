import { sequelize } from "../../config/db.js";
import { Sequelize } from "sequelize";
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
      count: totalRowResult,
      user: getTheAlias,
    });
  } catch (error) {
    console.log("second Alias controller");
  }
};

export { addUserBasedOnFields, getUserBasedOnAttributes, giveTheAlias };
