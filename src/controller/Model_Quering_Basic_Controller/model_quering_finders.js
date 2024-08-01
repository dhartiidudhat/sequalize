import user from "../../models/Model_Quering_Basic/user_model.js";
import { Op, where } from "sequelize";
// User find by primary key

const userFindByPk = async (req, res) => {
  try {
    const data = await user.findByPk(1);

    console.log("data", data);
    res.status(201).json({
      user: data,
    });
  } catch (error) {
    console.log("User find by pk:-", error);
  }
};

// if find the user if we have multiple user with sam name then it return the first it find

const userFindByOne = async (req, res) => {
  try {
    const data = await user.findOne({
      where: {
        fname: {
          [Op.eq]: "dharti",
        },
      },
    });
    res.status(201).json({
      user: data,
    });
  } catch (error) {
    console.log("User findbyone Controller", error);
  }
};

// if user is not find then it create the

const userFindOrCreate = async (req, res) => {
  try {
    const [data, created] = await user.findOrCreate({
      where: { fname: "sdepold", age: 40 },
      defaults: {
        lname: "Technical Lead JavaScript",
      },
    });
    const userData = await user.findOrCreate({
      where: {
        fname: "Hiral",
        age: 38,
      },
      lname: "gohel",
    });
    console.log("data");
    console.log(data.fname); // 'sdepold'
    console.log(data.lname); // This may or may not be 'Technical Lead JavaScript'
    console.log(created);
    res.status(201).json({
      user: data,
      userData: userData,
    });
    console.log("1", userData.fname);
    console.log("1", userData);
  } catch (error) {
    console.log("UserFindOrCreate", error);
  }
};

// It is find all the data and also give the count

const userFoundAndCount = async (req, res) => {
  try {
    const data = await user.findAndCountAll({
      where: {
        fname: "dharti",
      },
    });

    const userData = await user.findAndCountAll({
      where: {
        lname: "gohel",
      },
    });

    res.status(201).json({
      data: data,
      userData: userData,
    });
  } catch (error) {
    console.log("UserFoundAndCount", error);
  }
};

export { userFindByPk, userFindByOne, userFindOrCreate, userFoundAndCount };
