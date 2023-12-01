// JUEGOS QUE SE OFRECEN EN LA TIENDA
const shopContent = document.getElementById('shopContent')

// BOTON DEL CARRITO
const verCarrito = document.getElementById('verCarrito')

// DIV VISUAL DEL CARRITO
const cartDiv = document.getElementById("cartDiv")

// CANTIDAD DE JUEGOS QUE ME LLEVO EN EL CARRITO 
const cantidadCarrito = document.getElementById("quantityCart")

let cart = JSON.parse(localStorage.getItem("carrito")) || []

const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((product) => {
        // SE AGREGA UN JUEGO A LA PAGINA DE LA LISTA DE PRODUCTOS.
        let content = document.createElement('div');
        content.className = "card"
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio}$ USD<p>
        `;

        shopContent.append(content);
        // ADD TO CHART BUTTON
        let buy = document.createElement('button');
        buy.innerText = "Buy!"
        buy.className = "add"

        content.append(buy)

        // CADA VEZ QUE HAGAMOS CLICK, SE HACE UN PUSH AL ARRAY "CART"
        buy.addEventListener("click", () => {

            const gameRepeat = cart.some((repeatGame) => repeatGame.id === product.id)

            // CONDICIONAL PARA QUE NO ME DEJE AGREGAR AL CARRITO JUEGOS REPETIDOS, ASI NO SE ME JUNTAN MUCHOS JUEGOS.
            if (gameRepeat) {
                cart.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++
                    }
                });
            } else {
                cart.push({
                    id: product.id,
                    img: product.img,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad
                });
                console.log(cart);
                carritoCounter();
                saveLocal();
            }

            const Toast = Swal.mixin({
                toast: true,
                position: "top-start",
                showConfirmButton: false,
                timer: 1300,
            });
            Toast.fire({
                icon: "success",
                title: "Se agrego al carrito!"
            });


        });
    });
};
getProducts()


// FUNCION ARMADA PARA GUARDAR INFORMACION EN EL LOCAL STORAGE, CADA VEZ QUE LA LLAMO ME GUARDA CONTENIDO PASADO A UN STRING
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(cart))
}