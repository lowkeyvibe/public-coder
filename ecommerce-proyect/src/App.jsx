import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar.jsx"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.jsx"
import "../src/App.css"

export const App = () => {
  return (
    <html>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>


      </BrowserRouter>

    </html>
  )
}

export default App