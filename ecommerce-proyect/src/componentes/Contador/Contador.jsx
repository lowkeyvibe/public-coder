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
      <div className='counter'>
        <p > {counter} </p>
      </div>
      <button className='plus' onClick={addCounter}> + </button>

      <div className='add-to-cart'>
        <button className='button-add-to-cart' onClick={() => addFunction(counter)}>Add to cart!</button>
      </div>

    </div>

  )
}

export default Contador