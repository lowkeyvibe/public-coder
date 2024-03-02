// Traigo EXPRESS
const express = require("express");
const router = express.Router();
const CartManager = require("../controllers/cart-manager");
const cartManager = new CartManager("../breaking-code/src/models/carts.json");

// ACÁ CREAMOS UN NUEVO CARRITO!
router.post("/", async (req, res) => {
    try {
        const newCart = await cartManager.createCart();
        res.json(newCart);
    } catch (error) {
        console.error("Failed to create a new cart!", error);
        res.status(500).json({ error: "ERROR!" });
    }

    res.send({ status: "success", message: "NEW CART ADDED!" })
})

// ACÁ LISTAMOS LOS PRODUCTOS QUE PERTENEZCAN AL CARRITO CON EL CID PROPORCIONADO!
router.get("/:cid", async (req, res) => {
    const cartId = parseInt(req.params.cid);

    try {
        const cart = await cartManager.getCartById(cartId);
        res.json(cart.products);
    } catch (error) {
        console.error("Failed to get the cart!", error);
        res.status(500).json({ error: "ERROR!" });
    }


    res.send({ status: "success", message: "PRODUCTS LISTED!" })
})

// ACÁ AGREGAMOS UN PRODUCTO ALL ARRAY "PRODUCTS" DENTRO DEL CARRITO SELECCIONADO CON EL CID 
router.post("/:cid/product/:pid", async (req, res) => {
    const cartId = parseInt(req.params.cid);
    const productId = req.params.pid;
    const quantity = req.body.quantity || 1;

    try {
        const updateCart = await cartManager.addProductToCart(cartId, productId, quantity);
        res.json(updateCart.products);
    } catch (error) {
        console.error("We have an error adding the product!", error);
        res.status(500).json({ error: "ERROR" });
    }


    res.send({ status: "success", message: "NEW PRODUCT ADDED!" })
})


module.exports = router;