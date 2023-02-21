import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Navbar />  
      <ItemListContainer greeting="Se realiza el tratamiento para la limpieza y desperfectos del auto."/>
    </div>
  )
}

export default App;