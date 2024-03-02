console.log("Currently Working!");
const socket = io();

socket.on("usuarios", (data) => {
    const listaUsuarios = document.getElementById("products");
    data.forEach(usuario => {
        listaUsuarios.innerHTML += `
        <div class="each-product-box">

        <h2> ${usuario.title} </h2>
        <p> ${usuario.description} </p>
        <p> $ ${usuario.price} </p>
        <button> BORRAR </button>
        
        </div>
        `
    })
})
