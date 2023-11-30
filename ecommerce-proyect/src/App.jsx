import NavBar from "./componentes/NavBar/NavBar.jsx"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx"
import "../src/App.css"

export const App = () => {
  return (
    <html>
        <NavBar/>
        <ItemListContainer greeting="PROP GREETING" />
    </html>
  )
}

export default App