const { Model, DataTypes}= require("sequelize");
const User = require("./User");

class DataUser extends Model{};

DataUser.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:"User",
            key:"id"
        }
    },
    post_id:{
        type:DataTypes.INTEGER,
        references:{
            model:"Post",
            key:"id"
        }
    }


},{
    sequelize: require("../config/connection"),
    timestamps: false,
    freezeTableName:true,
    underscored:true,
    modelName: "DataUser"
});


module.exports = DataUser;