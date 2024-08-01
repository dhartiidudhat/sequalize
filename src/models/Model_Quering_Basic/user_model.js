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
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default User;
