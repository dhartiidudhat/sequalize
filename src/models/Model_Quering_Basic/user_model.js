import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const User = sequelize.define(
  "User",
  {
    fname: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: "Only character is allowed!",
        },
        notNull: {
          msg: "Please enter your name!",
        },
      },

      get() {
        const rawValue = this.getDataValue("fname");
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
    lname: {
      type: DataTypes.STRING,
      defaultValue: "Patel",

      set(value) {
        if (typeof value === "string" && value.length > 0) {
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1);
          this.setDataValue("lname", capitalizedValue);
        } else {
          this.setDataValue("lname", "");
        }
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["Male", "Female"]],
          msg: "Only Enter Male Or Female",
        },
      },
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.fname} ${this.lname}`;
      },
      set(value) {
        throw new Error("Do not try to add value in the full Name !");
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;
