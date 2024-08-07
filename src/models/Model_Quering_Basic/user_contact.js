import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const userContact = sequelize.define("userContact", {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

export default userContact;
