const showCart = () => {
    cartDiv.innerHTML = "";
    cartDiv.style.display = "flex"

    // HACEMOS VISIBLE EL CARRITO PARA EL USUARIO CON UN CLICK
    const visualCart = document.createElement("div")
    visualCart.className = "stylingCart"
    visualCart.innerHTML = `
    <h1 class="cartTitle"> Cart </h1>
    `;

    // INSERTAMOS EN EL HTML EL DIV PARA QUE EL USUARIO INTERACTUE
    cartDiv.append(visualCart)

    // CREAMOS EL BOTON PARA CERRAR EL CARRITO
    const closeDiv = document.createElement("button")
    closeDiv.innerText = "x";
    closeDiv.className = "close-div-button"
  
    visualCart.append(closeDiv)

    // CREAMOS UN EVENTO PARA QUE EL BOTON DE CERRAR CARRITO FUNCIONE
    closeDiv.addEventListener("click", () => {
        cartDiv.style.display = "none"
    });


    // SE AGREGA AL CARRITO LOS PRODUCTOS QUE ELIJAMOS
    cart.forEach((product) => {
        const cartContent = document.createElement("div")
        cartContent.className = "cart-content"
        cartContent.innerHTML = `
        <img src="${product.img}">
        <div class="h3andp">
        <h3>${product.nombre}</h3>
        <p class="game-price">${product.precio}$ USD<p>
        <p class="quantity-games">Quantity: ${product.cantidad}</p>
        </div>

        <p class="price-quantity">(${product.cantidad * product.precio}$ USD)</p>
        `;

        // SE INSERTA AL HTML EL CONTENIDO DEL CARRITO
        cartDiv.append(cartContent);

    });

    // FUNCION PARA SUMAR TODOS LOS VALORES DE LOS JUEGOS QUE TENGAMOS EN EL CARRITO
    const total = cart.reduce((acc, product) => acc + product.precio * product.cantidad, 0)


    // MOSTRAMOS EL VALOR DEL CARRITO AL USUARIO
    const totalBuying = document.createElement("div");
    totalBuying.className = "final-price";
    totalBuying.innerHTML = `Total Chart = ${total}$ USD`;
    cartDiv.append(totalBuying);
};

// ACTIVAMOS EL CARRITO
verCarrito.addEventListener("click", showCart);



const carritoCounter = () => {
    cantidadCarrito.style.display = "block"

    const carritoLength = cart.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}


