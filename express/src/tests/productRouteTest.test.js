const express = require("express");
const app = express();
const productRoutes = require("../routes/productRoutes");
const request = require("supertest");

app.use('/products', productRoutes);


describe('Product Routes', () => {
  it('Get all products /products', async () => {
    const response = await request(app).get('/products');
    
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Check the body
  });
});
