import user from "../../models/Model_Quering_Basic/user_model.js";

// Getter is used to modification
// when we take data from the db the fname is not in upper case but we can show the all name
// in same format of upper case using get method per particular column in the model

const showUser = async (req, res) => {
  try {
    const getUser = await user.findAll({});
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
    const addUser = await user.create({ fname, lname, age });
    res.status(201).json({ msg: "User create successfully" });
  } catch (error) {
    res.json({ msg: error.errors[0].message });
  }
};

export { showUser, createUser };
