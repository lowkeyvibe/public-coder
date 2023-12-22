import { useState } from 'react'
import '../Contador/Contador.css'

const Contador = ({ inicial, stock, addFunction }) => {
  const [counter, setCounter] = useState(1);

  const addCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const subtractCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className='button-container'>
      <button className='subtract' onClick={subtractCounter}> - </button>
      <p> {counter} </p>
      <button className='plus' onClick={addCounter}> + </button>
      <button className='add-to-cart' onClick={() => addFunction(counter)}>Agregar al carrito</button>
    </div>
  )
}

export default Contador