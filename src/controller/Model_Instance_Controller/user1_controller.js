import User1 from "../../models/Model_Instance/user1.js";

export const addUser = async (req, res) => {
  try {
    const newUser = await User1.build({
      firstName: "Dharti",
      lastName: "Dudhat",
    });
    console.log("---->new user", newUser);
    console.log("---->instance of", newUser instanceof User1);
    console.log("----> first name ", newUser.firstName);
    console.log("---->json", newUser.toJSON());

    await newUser.save();
    res.status(200).json(newUser.toJSON());

    console.log("----> new user saved successfully !");
  } catch (error) {
    console.log("--->error n user controller");
  }
};

// const newUser = User1.create({ firstName: "Gudii", lastName: "Patel" });
// // console.log("---->newUser", newUser);
// console.log("--->to Json", (await newUser).toJSON());
// newUser.firstName = "Dharti";
// await newUser.save();

// console.log("---->update new USer", newUser);

// console.log("----> new user saved successfully !");
