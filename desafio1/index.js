class ProductManager {
    constructor() {
        // Se crea el array!
        this.products = [],
            this.productId = 1
    }

    // Metodo 1
    addProducts(title, description, price, thumbnail, code, stock) {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Missing fields!");
            return

        } else if (this.products.some(number => number.code === code)) {
            console.warn("Ya existe el producto!");
            return

        } else {
            const id = this.productId++
            this.products.push({
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id
            })
        }
    }

    // Metodo 2
    getProducts() {
        console.log(this.products);
    }

    // Metodo 3
    getProductById(id) {
        const product = this.products.find(product => product.id === id)
        if (product) {
            console.log(product);
        } else {
            console.warn("Not found!");
        }
    }
}

const productsArray = new ProductManager()

productsArray.addProducts("Silla", "Mueble", 1000, "Ruta-img", "1020", 10)
productsArray.addProducts("Mesa", "Mueble", 1000, "Ruta-img", "3040", 10)
productsArray.addProducts("Armario", "Mueble", 1000, "Ruta-img", "5060", 10)
productsArray.addProducts("Cama", "Mueble", 1000, "Ruta-img", "7080", 10)

productsArray.getProductById(1); // Retorna Silla 
productsArray.getProducts(); // Retorna todos los productos








