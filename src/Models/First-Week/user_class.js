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
  },
  {
    sequelize,
    // modelName: "UserTWo",
  }
);

console.log("---->UseTwo", UserOne === sequelize.model.userTWo);

export default UserOne;
