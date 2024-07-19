import user from "../../models/Model_Quering_Basic/user_model.js";

const getUser = async (req, res) => {
  try {
    const getUser = await user.findAll({});
    res.status(201).json({ data: getUser });
  } catch (error) {
    console.log("getUser", error);
  }
};

const addUser = async (req, res) => {
  try {
    const { fname, lname } = req.body;
    const addUser = await user.create({ fname: fname, lname: lname });

    res.status(201).json({ message: "User add successfully!" });
  } catch (error) {
    console.log("-->addUserController", error);
  }
};

const getUserById = async (id) => {
  try {
    const getUserById = await user.findOne({
      where: {
        id: id,
      },
    });

    return getUserById;
  } catch (error) {
    console.log("---->getUserByIdController", error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { fname, lname } = req.body;
    const { id } = req.params;

    const getUser = await getUserById(id);

    if (!getUser) {
      res.status(400).json({ message: "User not found!" });
    }

    const updateUser = await user.update(
      { fname: fname, lname: lname },
      {
        where: {
          id: id,
        },
      }
    );

    res
      .status(201)
      .json({ data: updateUser, message: "User update successfully!" });
  } catch (error) {
    console.log("--->updateUserController", error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await getUserById(id);

    if (!getUser) {
      res.status(400).json({ message: "User not found!" });
    }
    const deleteUser = await user.destroy({
      where: {
        id: id,
      },
    });

    res.status(201).json({ message: "User delete successfully!" });
  } catch (error) {
    console.log("DeleteUserController", error);
  }
};
export { getUser, addUser, updateUser, deleteUser };
