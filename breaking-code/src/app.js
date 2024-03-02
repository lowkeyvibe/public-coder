const express = require("express")
const app = express()
const PUERTO = 8080
const productsRouter = require("./routes/products-router.js")
const cartsRouter = require("./routes/carts-router.js")
const realTimeRouter = require("./routes/view-router.js")
const fs = require('fs');

const ProductManager = require("./controllers/product-manager.js");
const productManager = new ProductManager("./src/models/products.json")


// Me traigo HANDLEBARS y SOCKET.IO
const exhbs = require("express-handlebars");
const socket = require("socket.io")
const { warn } = require("console")

// Configuramos HandleBars
app.engine("handlebars", exhbs.engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

// Middleware para trabajar archivos JSON.
app.use(express.json());

// Middleware para trabajar archivos estáticos.
app.use(express.static("./src/public"))

app.get("/", async (req, res) => {
    try {
        const products = await productManager.getProducts()
        res.render("home")
        res.json(products)

    } catch (error) {
        console.warn("error");
    }
})

// Rutas:
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/realtimeproducts", realTimeRouter);

// Creamos y referenciamos el listen con una constante:
const httpServer = app.listen(PUERTO, (req, res) => {
    console.log(`LISTENING TO PORT: ${PUERTO}`);
})

const io = socket(httpServer)

// TESTEO
io.on("connection", (socket) => {
    console.log("CLIENT CONNECTED");

    socket.on("mensaje", (data) => {
        console.log(data);
    })

    // Lee el archivo JSON
    fs.readFile('./src/models/products.json', 'utf8', (error, data) => {
        try {
            // Parsea el contenido del archivo JSON
            const jsonData = JSON.parse(data);
            socket.emit("usuarios", jsonData);

        } catch (error) {
            console.error("ERROR", error);
        }
    });
})





