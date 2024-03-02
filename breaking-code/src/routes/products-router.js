// Traigo EXPRESS
const express = require("express");
const router = express.Router();

// Me traigo el modulo de mi PRODUCT MANAGER para poder manipularlo.
const ProductManager = require("../controllers/product-manager.js");

// Asigno todos mis productos a una variable.
const productManager = new ProductManager("../breaking-code/src/models/products.json");

// "MIDDLEWARE"
router.use(express.json());

// ACA TENGO QUE DARLE UN LIMITE Y MOSTRAR HASTA AHI, DE LO CONTRARIO MOSTRAR TODOS.
router.get("/", async (req, res) => {
    try {
        const limit = req.query.limit;
        const products = await productManager.getProducts()
        if (limit) {
            // Mostramos con "?limit=(numero que elijamos) hasta que producto de la lista deseamos ver."
            res.json(products.slice(0, limit))
        } else {
            // Si no definimos hasta que producto ver, muestro todos.
            res.json(products)
        }

    } catch (error) {
        res.status(404).json({ error: "ERROR!" })
    }
})

// ACA TENGO QUE LISTAR EL PRODUCTO CON LA ID PROPORCIONADA.
router.get("/:pid", async (req, res) => {
    try {
        let id = req.params.pid;
        const product = await productManager.getProductById(parseInt(id))

        if (!product) {
            return res.json({ error: "ID no encontrado!" })
        } else {
            res.json(product)
        }

    } catch (error) {
        res.status(404).json({ error: "ERROR!" })
    }
})

// ACÁ TENGO QUE AGREGAR UN NUEVO PRODUCTO
router.post("/", async (req, res) => {
    const newProduct = req.body;
    try {
        await productManager.addProduct(newProduct);
        res.send({ status: "SUCCESS", message: "PRODUCT ADDED!" })
    }
    catch (error) {
        res.send({ status: "DENIED", message: "OPERATION DENIED" })
    }
})

// ACÁ TENGO QUE TOMAR UN PRODUCTO POR SU ID Y ACTUALIZAR LOS CAMBIOS QUE ESCRIBA DESDE EL BODY (POSTMAN)
router.put("/:pid", (req, res) => {
    const id = req.params.pid;
    const updatedProduct = req.body

    try {
        productManager.updateProduct(parseInt(id), updatedProduct)
        res.send({ status: "SUCCESS", message: "PRODUCT UPDATED!" })

    } catch (error) {
        res.send({ status: "DENIED" })
    }
})

// ACÁ TENGO QUE ELIMINAR UN PRODUCTO PASANDO SU ID DESDE POSTMAN 
router.delete("/:pid", async (req, res) => {
    const id = req.params.pid

    try {
        await productManager.deleteProduct(parseInt(id))
        res.send({ status: "SUCCESS, PRODUCT DELETED" })
    } catch (error) {
        res.send({ status: "DENIED" })
    }

    res.send({ status: "success", message: "PRODUCT DELETED!" })
})

module.exports = router;