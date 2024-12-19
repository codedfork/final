const express = require('express');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');
require("../src/config/mongodb");

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Register product routes
app.use('/products', productRoutes);

// Global error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
