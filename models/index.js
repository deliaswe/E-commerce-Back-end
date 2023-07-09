// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships between models

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // Set foreign key in Product model
});

// A product belongs to tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // The intermediary ProductTag model
  foreignKey: 'product_id', // Set foreign key in ProductTag model
});

  // A tag belongs to many products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // The intermediary ProductTag model
  foreignKey: 'tag_id', // Set foreign key in ProductTag model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // Set foreign key in Product model
});

// Export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
