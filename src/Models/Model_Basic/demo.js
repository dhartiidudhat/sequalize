import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db.js";

class Employee extends Model {}

Employee.init(
  {
    empName: {
      type: DataTypes.STRING,
      defaultValue: "GateWay",
    },
    empCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    // modelName: "emp2",
  }
);

console.log("----> Models registered in Sequelize:", sequelize.models);

// console.log("----> Employeee Model from Sequelize:", sequelize.models.emp2);

// console.log("----> UserTwo comparison:", Employee === sequelize.models.emp2);

export default Employee;
