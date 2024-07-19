import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
      defaultValue: "Dharti",
    },
  },
  {
    tableName: "User",
  }
);

export default User;
