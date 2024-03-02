// Traigo EXPRESS y ROUTER
const express = require("express");
const router = express.Router();

const ProductManager = require("../controllers/product-manager.js");
const productManager = new ProductManager("./src/models/products.json")

// Middleware para trabajar archivos estáticos.
router.use(express.static("./src/public"))


router.get("/", async (req, res) => {
    try {
        const products = await productManager.getProducts()
        res.render("realTimeProducts")

    } catch (error) {
        console.warn("error");
    }
})

module.exports = router;