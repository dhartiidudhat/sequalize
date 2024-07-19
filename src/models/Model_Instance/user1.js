// SecondWeeek db

import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const User1 = sequelize.define(
  "User1",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

export default User1;
