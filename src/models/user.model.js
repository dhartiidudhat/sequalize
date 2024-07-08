import { DataTypes, STRING } from "sequelize";

function UserModel(sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  };
  return sequelize.define("User", attributes, { timestamps: false });
}

export { UserModel };
