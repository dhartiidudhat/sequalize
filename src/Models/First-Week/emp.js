import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const Emp = sequelize.define(
  "emp",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    middleNameUser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
);

export default Emp;
