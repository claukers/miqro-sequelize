module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    text: DataTypes.STRING,
    bla2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  post.associate = function (models) {
    // associations can be defined here
  };
  return post;
};
