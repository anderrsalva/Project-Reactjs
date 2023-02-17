import logo from './logo.svg';
import './App.css';
//import saludar from './saludar.js'
//import { saludar, chau } from './saludar.js'

function App() {

  // saludar() 
  // chau()

  //Inserción de codigo js en JSX
  const profesor = 'Conrado Lanusse'
  const tutor = 'Santiago Varela'

  const estilos = {
    color: 'red',
    marginTop: 20,
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={estilos}>
          Bienvendios a React
        </p>
        <h4>Profe {profesor} </h4>
        <h5>Tutor {tutor} </h5>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section>
      <ul>
        <li>nombre</li>
        <li>apellido</li>
        <li>edad</li>
        <li>rol</li>
      </ul>
      </section>

      
    </div>
  );
}

export default App;
