import React, { useContext } from 'react'
import { useState, useEffect } from "react"
import { CarritoContext } from '../../Context/CarritoContext'
import { dataBase } from '../Services/config'
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore"
import "../Checkout/Checkout.css"

const Checkout = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("")

  function manejadorSubmit(event) {
    event.preventDefault()

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completar todos los campos!")
      return
    }

    if (email !== emailConfirmacion) {
      setError("Deben coincidir los emails!")
      return
    }

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.name,
        cantidad: producto.cantidad
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email
    }

    Promise.all(
      orden.items.map(async (productoOrden) => {

        const productoRef = doc(dataBase, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad
        })
      })
    )

      .then(() => {
        addDoc(collection(dataBase, "ordenes"), orden)
          .then(docRef => {
            setOrdenId(docRef.id);
            vaciarCarrito()
          })
          .catch(error => console.log("Error al crear la orden ", error))
      })
      .catch(error => {
        console.log("No se pudo actualizar el stock ", error);
        setError("No se pudo actualizar el stock")
      })

    addDoc(collection(dataBase, "ordenes"), orden)
      .then(docRef => {
        setOrdenId(docRef.id)
        vaciarCarrito()
      })
      .catch(error => {
        console.log("Error al crear la orden.", error)
        setError("No se pudo crear la orden.")
      })

  }
  
  return (
    <div>
      <form onSubmit={manejadorSubmit}>

        {
          carrito.map(producto => (
            <div key={producto.item.id}>
              <p className='checkout-title' > {producto.item.name} x <span style={{ color: "red" }}>{producto.cantidad}</span> </p>
              <p className='checkout-unity-price'> <span style={{ color: "white" }}> Precio: $ </span> <span style={{ color: "green" }}> {producto.item.price} </span> </p>
              <img className="img-checkout" src={producto.item.img} alt="" />
              <hr />

            </div>
          ))
        }

        <hr />
        <p className='final-price-checkout'>FINAL PRICE: <span className='total-ch'>${total}</span></p>

        <div className="center-form">
          <div>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div>
            <label htmlFor="">Apellido</label>
            <input type="text" onChange={(e) => setApellido(e.target.value)} />
          </div>

          <div>
            <label htmlFor="">Telefono</label>
            <input type="text" onChange={(e) => setTelefono(e.target.value)} />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="">Email Confirmación</label>
            <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
          </div>

          {
            error && <p className='error-form'> {error} </p>
          }

          {
            ordenId && (
              <span className='thanks-checkout' > Gracias por su compra! Tu número de orden es: <span className="order-id">{ordenId}</span> </span>
            )
          }
        </div>

        <div className='checkout-button'>
          <button type='submit' > Finalizar Orden </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout