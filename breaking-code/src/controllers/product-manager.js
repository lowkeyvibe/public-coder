const fs = require("fs").promises

class ProductManager {
    static prevId = 0;

    constructor(path) {
        this.products = [],
            this.path = "../breaking-code/src/models/products.json";
    }

    // Metodo 1
    async addProduct({ title, description, price, code, stock, category, status}) {

        try {
            const arrayProducts = await this.readingFile()
            if (!title || !description || !price || !code || !stock || !category || !status) {
                console.log("Missing fields!");
                return

            } else if (this.products.some(number => number.code === code)) {
                console.warn("Already exist!!");
                return

            } else {
                const newProduct = {
                    title,
                    description,
                    price,
                    code,
                    stock,
                    category,
                    status,
                    thumbnails: []
                }

                if (arrayProducts.length > 0) {
                    ProductManager.prevId = arrayProducts.reduce((maxId, product) => Math.max(maxId, product.id), 0);
                }

                newProduct.id = ++ProductManager.prevId

                arrayProducts.push(newProduct);
                await this.writeProducts(arrayProducts);
            }

        } catch (error) {
            console.warn("Error ADDING PRODUCT!", error);
        }
    }

    // Metodo 2
    async getProducts() {
        try {
            const arrayProducts = await this.readingFile();
            return arrayProducts;
        } catch (error) {
            console.log("Error al leer el archivo", error);
            throw error;
        }
    }

    // Metodo 3
    async getProductById(id) {
        try {
            await this.readingFile()
            const product = this.products.find(product => product.id === id)

            if (product) {
                return product;
            } else {
                console.warn("Product NOT FOUND!");
            }

        } catch (error) {
            console.warn("ERROR!");
        }

    }

    // Metodo 4
    async readingFile() {
        try {
            const response = await fs.readFile(this.path, "utf-8");
            const arrayProducts = JSON.parse(response);
            return arrayProducts;
        } catch (error) {
            console.log("Error al leer un archivo", error);
            throw error;
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
            const arrayProducts = await this.readingFile();
            const index = arrayProducts.findIndex(item => item.id === id);

            if (index !== -1) {
                arrayProducts[index] = { ...arrayProducts[index], ...updatedProduct };
                await this.writeProducts(arrayProducts);
            }
        } catch (error) {
            console.log("ERROR");
        }
    }

    // Metodo 7
    async deleteProduct(id) {
        try {
            const arrayProducts = await this.readingFile();
            const index = arrayProducts.findIndex(item => item.id === id);

            if (index !== -1) {
                arrayProducts.splice(index, 1);
                await this.writeProducts(arrayProducts);
            }
        } catch (error) {
            console.log("Error al eliminar el producto", error);
        }
    }
}

module.exports = ProductManager;
