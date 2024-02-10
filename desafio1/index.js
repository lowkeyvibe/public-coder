const fs = require("fs").promises

class ProductManager {
    constructor(path) {
        // Se crea el array!
        this.products = [],
        this.productId = 1
        this.path = path;
    }

    // Metodo 1
    async addProduct(title, description, price, thumbnail, code, stock) {

        try {
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.log("Missing fields!");
                return

            } else if (this.products.some(number => number.code === code)) {
                console.warn("Already exist!!");
                return

            } else {
                const id = this.productId++
                const newProduct = {
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                    id
                }

                this.products.push(newProduct)
                await this.writeProducts(this.products)

            }

        } catch (error) {
            console.warn("Error ADDING PRODUCT!", error);
        }
    }

    // Metodo 2
    async getProducts() {
        await this.readProducts()
        console.log(this.products);
    }

    // Metodo 3
    async getProductById(id) {
        try {
            await this.readProducts()
            const product = this.products.find(product => product.id === id)

            if (product) {
                console.log(product);
            } else {
                console.warn("Product NOT FOUND!");
            }

        } catch (error) {
            console.warn("ERROR!");
        }

    }

    // Metodo 4
    async readProducts() {
        try {
            const response = await fs.readFile(this.path, "utf-8");
            const products = JSON.parse(response);
            this.products = products;

        } catch (error) {
            this.products = []
        }
    }

    // Metodo 5
    async writeProducts(newProducts) {
        try {
            await fs.writeFile(this.path, JSON.stringify(newProducts, null, 2))
        } catch (error) {
            console.error("Error WRITING PRODUCT!", error)
        }
    }

    // Metodo 6
    async updateProduct(id, updatedProduct) {
        try {
            await this.readProducts()
            const productIndex = this.products.findIndex(product => product.id === id)

            if (productIndex === -1) {
                console.error("Not found TO UPDATE!")
                return
            }

            this.products[productIndex] = {
                ...this.products[productIndex],
                ...updatedProduct,
                id: this.products[productIndex].id
            };

            await this.writeProducts(this.products);

        } catch (error) {
            console.error("Error updating product", error)
        }
    }

    // Metodo 7
    async deleteProduct(id) {
        await this.readProducts()
        const arrayFiltrado = this.products.filter(i => i.id != id)
        await this.writeProducts(arrayFiltrado)
      }

}

const productList = new ProductManager("./products.json")

// Acá inicia el testing!
productList.addProduct("Silla", "Mueble", 1000, "Ruta-img", "1020", 10) // Agrega productos al .JSON
productList.addProduct("Silla", "Mueble", 1000, "Ruta-img", "1030", 10) // Agrega productos al .JSON
productList.getProductById(2) // Retorna la segunda silla
productList.getProducts() // Muestra el listado de productos

productList.deleteProduct(2) // Borra del .JSON el item con ID = 2
productList.updateProduct(1, { // Hace un Update del item con ID = 1
    title: "Prueba 540, estoy sufriendo",
    price: 3000,
    stock: 500
})