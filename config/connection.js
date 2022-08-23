require("dotenv").config();
const {Sequelize} = require("sequelize");

const connection = new Sequelize(process.env.DB_name,process.env.DB_User,process.env.Pass,{
    host:"localhost",
    dialect:"mysql",
    logging:false
})

module.exports = connection;

