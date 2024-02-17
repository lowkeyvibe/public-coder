// Traigo a EXPRESS
const express = require("express");

// Asigno EXPRESS a una variable.
const app = express();

// Me traigo el modulo de mi PRODUCT MANAGER para poder manipularlo.
const ProductManager = require("./Controllers/product-manager.js");

// Asigno todos mis productos a una variable.
const productManager = new ProductManager("./src/Models/products.json");

// Defino el puerto
const PUERTO = 8080;

// "MIDDLEWARE"
app.use(express.json());

// Pagina de inicio para que no quede feo.
app.get("/", (req, res) => {
    res.send("Para ver el proyecto, dirijase a 'localhost:8080/products' :)")
})

app.get("/products", async (req, res) => {
    try {
        const limit = req.query.limit;
        const productos = await productManager.getProducts()
        if (limit) {
            // Mostramos con "?limit=(numero que elijamos) hasta que producto de la lista deseamos ver."
            res.json(productos.slice(0, limit))
        } else {
            // Si no definimos hasta que producto ver, muestro todos.
            res.json(productos)
        }

    } catch (error) {
        res.status(404).json({ error: "ERROR!" })
    }
})

app.get("/products/:pid", async (req, res) => {
    try {
        let id = req.params.pid;
        const producto = await productManager.getProductById(parseInt(id))

        if (!producto) {
            return res.json({ error: "ID no encontrado!" })
        } else {
            res.json(producto)
        }

    } catch (error) {
        res.status(404).json({ error: "ERROR!" })
    }
})

app.listen(PUERTO, () => {
    console.log(`Escuchando en el puerto: ${PUERTO}`);
});