const {DataTypes, Model} = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model{};

User.init({
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:4
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            len:{
                args:4,
                msg:"Your password must be at least 6 character in length."
            }
        }
    }

},{
    sequelize: require("../config/connection"),
    nodelName:"user",
    hooks:{
        async beforeCreate(user){
            const hashec_pass = await bcrypt.hash(user.password,10);
            user.password = hashec_pass;
        }
    }
});

User.prototype.validatePass = async function(pass, stored_pass){
    return await bcrypt.compare(pass,stored_pass);
};

module.exports = User;