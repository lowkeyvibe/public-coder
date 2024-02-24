const express = require("express")
const app = express()
const PUERTO = 8080
const productsRouter = require("./routes/products-router.js")
const cartsRouter = require("./routes/carts-router.js")

// "MIDDLEWARE"
app.use(express.json());

// Ruta Raíz:
app.get("/", (req, res) => {
    res.send("Ruta: Raíz!")
})

// Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

// Listen!
app.listen(PUERTO, (req, res) => {
    console.log("SERVER CONNECTED!");
})