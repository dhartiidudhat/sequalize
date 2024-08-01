// This tables is for getter setter virtuals

import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.js";

const userData = sequelize.define("UserData", {
    firstName:{
        type: DataTypes.STRING,
        allowNull:false,

      
    },
    lname:{
        type:DataTypes.STRING,
        defaultValue:"Patel"
    },
    age:{
        type: DataTypes.INTEGER,
    }

})