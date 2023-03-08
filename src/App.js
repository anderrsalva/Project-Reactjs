import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner/Banner";


function App() {

  return (
    <div className="App">
      <Navbar />  
      <Banner />
      <ItemListContainer/>
    </div>
  )
}

export default App;