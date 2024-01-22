//1) Voy a importar useState y el createContext que me permite crear un contexto que almacenara toda la logica de mi carrito de compras.

import { useState, createContext } from "react";

//2) Creamos el context:
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

// El valor inicial es un objeto, con la propiedad carrito, que es un Array vacio, el total de la compra, y la cantidad total de productos. 

export const CarritoProvider = ({children}) => {
    // Creamos los estados!
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    // Verificamos por consola:
    console.log(carrito);
    console.log("Cantidad Items: " + cantidadTotal);
    console.log("Precio total de la compra: " + total);

    // ------------------------------------------------------ //

    // Funcion para agregar productos al carrito
    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if(!productoExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.price * cantidad));
            // La sintaxis: prev => [...prev, {item, cantidad}] Se utiliza para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto que representa el producto agregado. 
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.price * cantidad));
        }
    }

    // Funcion para eliminar un producto
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id != id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    // Funcion para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0)
    }

    return (
        // En el value enviamos el valor actual del carrito, los items, el total de la compra y las funciones de agregar, eliminar y vaciar carrito.
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito}}> {children} </CarritoContext.Provider>
    )
}