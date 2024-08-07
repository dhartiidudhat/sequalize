import User1 from "../../models/Model_Instance/user1.js";

export const User2 = async (req, res) => {
  try {
    console.log("====>come to user2");
    const newUser = await User1.create({
      firstName: "Dharti r",
      lastName: "Dudhat ",
    });
    console.log("---> new user", newUser.toJSON());
    console.log("----->stringify", JSON.stringify(newUser));

    // newUser.firstName = "Gudi";

    // newUser.set({
    //   firstName: "Gudiya",
    //   lastName: "Dudhat patel",
    // });

    //

    // -------------->using the Update method
    // newUser.lastName = "Patel";

    // await newUser.update({ firstName: "Gudi" });

    // await newUser.save();
    // console.log("--->updated name", newUser.toJSON());

    // ------------>Destroy

    // console.log("---->name", newUser.firstName);

    // await newUser.destroy();

    // --------------> Reload

    newUser.firstName = "Gudii Patel";

    console.log("---->name before Reload", newUser.firstName);

    newUser.reload();

    console.log("---->name after reload", newUser.firstName);

    res.status(200).json(newUser.toJSON());
  } catch (error) {
    console.log("---->error in second Controller", error);
  }
}; 
