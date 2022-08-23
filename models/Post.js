const {DataTypes,Model}= require("sequelize");

class Post extends Model{};

Post.init({
    textPost:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len: {
                args: [4,100],
                msg: "Need write something in this post"
           }
        }
    },
    timestamps: false,
},{
    sequelize: require("../config/connection"),
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
})

module.exports = Post;