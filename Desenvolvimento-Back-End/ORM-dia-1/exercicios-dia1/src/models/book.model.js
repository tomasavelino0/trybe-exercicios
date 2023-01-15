// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Book.model extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Book.model.init({
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     pageQuantity: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Book.model',
//   });
//   return Book.model;
// };

const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return Book;
};

module.exports = BookModel;