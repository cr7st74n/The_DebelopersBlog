const User = require("./User");
const Post = require("./Post");
const DataUser = require("./DataUsers");

User.belongsToMany(Post,{through:DataUser});
Post.belongsToMany(User,{through:DataUser});

module.exports = {
    User,
    Post,
    DataUser,
}