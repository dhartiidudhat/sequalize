import { DataTypes, Model, STRING } from "sequelize";
import { sequelize } from "../../config/db.js";

class User extends Model {
  static classLevelMethod() {
    return "foo";
  }
  instanceLevelMethod() {
    return "bar";
  }
  getFullname() {
    return [this.firstname, this.lastname].join(" ");
  }
}
User.init(
  {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
  },
  { sequelize }
);

console.log("----->user 3 start from here:-------->");

console.log(User.classLevelMethod()); // 'foo'
const user = User.build({ firstname: "Jane", lastname: "Doe" });
console.log(user.instanceLevelMethod()); // 'bar'
console.log(user.getFullname()); // 'Jane Doe'

export default User;
