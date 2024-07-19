import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const User = sequelize.define("User", {
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING,
    defaultValue: "Patel",
  },
});

export default User;
