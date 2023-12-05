const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("Product created successfully");
    } catch (error) {
      res.status(500).json("failed to create the product");
    }
  },

  getAllProduct: async(req, res) => {
    try {
        
    } catch (error) {
        
    }
  }
};
