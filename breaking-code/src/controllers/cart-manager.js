const fs = require("fs").promises;

class CartManager {
    constructor(path) {
        this.carts = [];
        this.path = "../breaking-code/src/models/carts.json";
        this.prevId = 0;

        this.loadCarts();
    }

    // Metodo 1
    async loadCarts() {
        try {
            const data = await fs.readFile(this.path, "utf8");
            this.carts = JSON.parse(data);
            if (this.carts.length > 0) {
                this.ultId = Math.max(...this.carts.map(cart => cart.id));
            }
        } catch (error) {
            console.error("Error al cargar los carritos desde el archivo", error);
            await this.saveCarts();
        }
    }

    // Metodo 2
    async saveCarts() {
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, 2));
    }

    // Metodo 3
    async createCart() {
        const nuevoCarrito = {
            id: ++this.prevId,
            products: []
        };

        this.carts.push(nuevoCarrito);

        await this.saveCarts();
        return nuevoCarrito;
    }

    // Metodo 4
    async getCartById(cartId) {
        try {
            const carrito = this.carts.find(c => c.id === cartId);

            if (!carrito) {
                throw new Error(`No existe un carrito con el id ${cartId}`);
            }

            return carrito;
        } catch (error) {
            console.error("Error al obtener el carrito por ID", error);
            throw error;
        }
    }

    // Metodo 5
    async addProductToCart(cartId, productId, quantity = 1) {
        const carrito = await this.getCartById(cartId);
        const existeProducto = carrito.products.find(p => p.product === productId);

        if (existeProducto) {
            existeProducto.quantity += quantity;
        } else {
            carrito.products.push({ product: productId, quantity });
        }

        await this.saveCarts();
        return carrito;
    }
}

module.exports = CartManager;