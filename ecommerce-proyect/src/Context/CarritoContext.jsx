import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);


    // Funcion para agregar productos al carrito
    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.price * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
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
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}> {children} </CarritoContext.Provider>
    )
}