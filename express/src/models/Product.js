const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensure each product has a unique ID
  },
  title: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure price cannot be negative
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(url);
      },
      message: 'Please provide a valid image URL',
    },
  },
  rating: {
    rate: {
      type: Number,
      required: true,
      min: 0,
      max: 5, // Ratings should be between 0 and 5
    },
    count: {
      type: Number,
      required: true,
      min: 0, // Ensure count is non-negative
    },
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
