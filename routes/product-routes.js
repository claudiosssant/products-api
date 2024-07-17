const express = require('express');
const Products = require("../controllers/products")

module.exports = app => {
  app.use(express.urlencoded({ extended: true}));
  app.use(express.json());

  app.post("/produtos", (req, res) => {
    const product = req.body;
    Products.cadastrarProduto(product, res);
  })

  app.get("/produtos", (req, res) => {
    Products.listarProduto(res);
  })
}