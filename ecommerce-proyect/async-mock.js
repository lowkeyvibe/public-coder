const products = [
    { id: "1", name: "iPhone SE", stock: 10, price: 250, img: "../assets/imgProducts/celulares/iphonese.png", category: "celulares" },
    { id: "2", name: "iPhone 12", stock: 10, price: 500, img: "../assets/imgProducts/celulares/iphone12.png", category: "celulares" },
    { id: "3", name: "iPhone 13", stock: 10, price: 600, img: "../assets/imgProducts/celulares/iphone13.png", category: "celulares" },
    { id: "4", name: "iPhone 14", stock: 10, price: 800, img: "../assets/imgProducts/celulares/iphone14.png", category: "celulares" },
    { id: "5", name: "iPhone 15", stock: 10, price: 1200, img: "../assets/imgProducts/celulares/iphone15.png", category: "celulares" },
    { id: "6", name: "The Last Of Us", stock: 10, price: 60, img: "../assets/imgProducts/juegos/thelastofus.png", category: "juegos" },
    { id: "7", name: "God Of War", stock: 10, price: 30, img: "../assets/imgProducts/juegos/godofwar.png", category: "juegos" },
    { id: "8", name: "Assasin's Creed Mirage", stock: 10, price: 40, img: "../assets/imgProducts/juegos/mirage.png", category: "juegos" },
    { id: "9", name: "Football Club 24", stock: 10, price: 20, img: "../assets/imgProducts/juegos/fifa24.png", category: "juegos" },
    { id: "10", name: "Star Wars: Jedi Survivor", stock: 10, price: 25, img: "../assets/imgProducts/juegos/jedi.png", category: "juegos" },
    { id: "11", name: "Cajonera", stock: 10, price: 40, img: "../assets/imgProducts/muebles/cajonera.png", category: "muebles" },
    { id: "12", name: "Cama", stock: 10, price: 100, img: "../assets/imgProducts/muebles/cama.png", category: "muebles" },
    { id: "13", name: "Placard", stock: 10, price: 155, img: "../assets/imgProducts/muebles/placard.png", category: "muebles" },
    { id: "14", name: "Juego de Silla y Mesa", stock: 70, price: 400, img: "../assets/imgProducts/muebles/sillaymesa.png", category: "muebles" },
    { id: "15", name: "Silla", stock: 10, price: 35, img: "../assets/imgProducts/muebles/silla.png", category: "muebles" },
    { id: "16", name: "Cuadro 1", stock: 10, price: 20, img: "../assets/imgProducts/cuadros/estatua.png", category: "cuadros" },
    { id: "17", name: "Cuadro 2", stock: 10, price: 25, img: "../assets/imgProducts/cuadros/mama.png", category: "cuadros" },
    { id: "18", name: "Cuadro 3", stock: 10, price: 29, img: "../assets/imgProducts/cuadros/starwars.png", category: "cuadros" },
    { id: "19", name: "Cuadro 4", stock: 10, price: 15, img: "../assets/imgProducts/cuadros/tanbionica.png", category: "cuadros" },
    { id: "20", name: "Cuadro 5", stock: 10, price: 40, img: "../assets/imgProducts/cuadros/taylor.png", category: "cuadros" }
]

// Funcion para traer productos en general, vamos a darle uso para mostrarle al cliente todos los productos que ofrecemos sin diferenciarlos por categoria.
export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 1000)
    })
}

// Funcion para filtrar productos por categoria, vamos a darle uso para mostrarle al cleinte todos los productos que ofrecemos segun la categoria que especifique.
export const getProductsByCategory = (categoryName) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const categorias = products.filter(item => item.category === categoryName)
            resolve(categorias)
        }, 1000)
    })
}

// Funcion para traer un solo objeto que necesitemos, vamos a darle uso cuando necesitamos ver los detalles de un producto en especial.
export const getOneProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = products.find(item => item.id === id)
            resolve(producto)
        }, 1000)
    })
}