import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.js";

class UserOne extends Model {}

UserOne.init(
  {
    fName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mName: {
      type: DataTypes.STRING,
      defaultValue: "Dharti",
    },
    myDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "User2",
    freezeTableName: true,
  }
);

console.log("----> Models registered in Sequelize:", sequelize.models);
console.log("----> UserTwo Model from Sequelize:", sequelize.models.User2);
console.log("----> UserTwo comparison:", UserOne === sequelize.models.User2);

export default UserOne;
