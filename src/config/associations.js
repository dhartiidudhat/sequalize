import userContact from "../models/Model_Quering_Basic/user_contact.js";
import User from "../models/Model_Quering_Basic/user_model.js";
import { sequelize } from "./db.js";

// Define association

User.hasOne(userContact, {
  foreignKey: "user_id",
  as: "contactDetails",
});
userContact.belongsTo(User, {
  foreignKey: "user_id",
});

// Sync associations (optional, can be used to apply changes to the database schema)
(async () => {
  // await sequelize.sync({ force: true });
})();
