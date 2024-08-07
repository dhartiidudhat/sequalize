import { Model, QueryTypes } from "sequelize";
import { sequelize } from "../../config/db.js";
import User from "../../models/Model_Quering_Basic/user_model.js";

// Getter is used to modification
// when we take data from the db the fname is not in upper case but we can show the all name
// in same format of upper case using get method per particular column in the model

const showUser = async (req, res) => {
  try {
    const getUser = await User.findAll({});
    res.status(201).json({ data: getUser });
  } catch (error) {
    console.log("show User to che getter data", error);
  }
};

// Setter is get the value if we want to add or remove before if store in the db we can do that here
// we can again call the same api and check the last name first latter is stored in capitalized

// Virtual
// this is something that is not exist in db in reality
// if we have fname & lname we want full name we can create a virtual fields in that we can get the full name
// this also we can check by same api call and last data of mauli

// --------------------------->Validations

// Check for unique error message

const createUser = async (req, res) => {
  try {
    const { fname, lname, age } = req.body;
    console.log("fnam", fname, lname, age);
    const addUser = await User.create({ fname, lname, age });
    res.status(201).json({ msg: "User create successfully" });
  } catch (error) {
    res.json({ msg: error.errors[0].message });
  }
};

// -----------------------> raw queries

const userRawQueries = async (req, res) => {
  try {
    const userData = await sequelize.query(`select * from User`, {
      type: QueryTypes.SELECT,
      // model: User,
      mapToModel: true,
      plain: false,
      logging: console.log,
      raw: false,
    });

    const [results, metadata] = await sequelize.query(
      "UPDATE User SET age = 24 WHERE id = 1"
    );

    console.log("---->User", User);

    res.status(201).json({
      data: userData,
      // user_Data: user_Data,
    });
  } catch (error) {
    console.log("User Raw Queries controller", error);
  }
};

const userReplacements = async (req, res) => {
  try {
    const userOne = await sequelize.query(`select * from User where id = ? `, {
      replacements: ["3"],
      type: QueryTypes.SELECT,
    });

    const userTwo = await sequelize.query(
      `select * from User where fname = :fname`,
      {
        replacements: { fname: "mauli" },
        logging: console.log,
        type: QueryTypes.SELECT,
      }
    );
    const userThree = await sequelize.query(
      `select * from User where fname in (:fname)`,
      {
        replacements: { fname: ["mauli", "dharti"] },
        logging: console.log,
        type: QueryTypes.SELECT,
      }
    );

    const userFour = await sequelize.query(
      "SELECT * FROM User WHERE fname LIKE :search_name",
      {
        replacements: { search_name: "%i%" },
        type: QueryTypes.SELECT,
      }
    );

    res.status(201).json({
      userOne: userOne,
      userTwo: userTwo,
      userThree,
      userFour,
    });
  } catch (error) {
    console.log("replacement controller", error);
  }
};

export { showUser, createUser, userRawQueries, userReplacements };
