import user from "../../models/Model_Quering_Basic/user_model.js";
import userContact from "../../models/Model_Quering_Basic/user_contact.js";
import { Op } from "sequelize";
const userOneToOne = async (req, res) => {
  try {
    // const data = await user.create({
    //   fname: "dharti",
    //   lname: "dudhat",
    //   age: "21",
    // });
    // if (data && data.id) {
    //   await userContact.create({
    //     address: "2/16 jay satadhar nagar",
    //     city: "ahmedabad",
    //     user_id: data.id,
    //   });
    // }

    // -------->Get the User data

    const data = await user.findAll({
      attributes: ["fname", "lname"],
      include: {
        model: userContact,
        as: "contactDetails",
        attributes: ["address"],
      },
      where: {
        id: {
          [Op.eq]: 2,
        },
      },
    });

    // ---------> want to show first  user contact details

    const userContactDetails = await userContact.findAll({
      attributes: ["address"],

      include: {
        model: user,
        attributes: ["fname"],
      },
    });

    res.status(201).json({
      data: data,
      userContact: userContactDetails,
      msg: "User created successfully!",
    });
  } catch (error) {
    console.log("User one to one Controller", error);
  }
};

const addAssociatedUser = async (req, res) => {
  try {
    const data = await userContact.create({
      address: "Vastrapur",
      city: "Ahmedabad",
      user_id: "2",
    });
    res.status(201).json({
      msg: "Usr address created successfully!",
      data,
    });
  } catch (error) {
    console.log("Add Associated User", error);
  }
};

const userOneToMany = async (req, res) => {
  try {
    const userData = await user.findAll({
      attributes: ["fname", "lname"],
      include: {
        model: userContact,
        attributes: ["address"],
      },
    });

    const userContactDetails = await userContact.findAll({
      attributes: ["address", "city"],
      include: {
        model: user,
        attributes: ["fname"],
      },
    });
    res.status(201).json({
      msg: "user Found Successfully",
      userData: userData,
      userContactDetails,
    });
  } catch (error) {
    console.log("Error in User One To many ", error);
  }
};

export { userOneToOne, addAssociatedUser, userOneToMany };
