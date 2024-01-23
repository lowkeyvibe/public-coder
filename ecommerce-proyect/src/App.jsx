import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar.jsx"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.jsx"
import "../src/App.css"
import { CarritoProvider } from "./Context/CarritoContext.jsx"
import Cart from "./componentes/Cart/Cart.jsx"
import Checkout from "./componentes/Checkout/Checkout.jsx"

export const App = () => {
  return (
    <html>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </html>
  )
}

export default App