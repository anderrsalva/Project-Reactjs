import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Navbar />  
      <ItemListContainer greeting="Ver trabajos realizados sobre el servicio a solicitar."/>
    </div>
  )
}

export default App;