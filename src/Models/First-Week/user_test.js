import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const UserTest = sequelize.define(
  "user-test",
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
    bar: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    barOne: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    timestamps: true,
    // createdAt: false,
    // updatedAt: "update_at",
  }
);

export default UserTest;
