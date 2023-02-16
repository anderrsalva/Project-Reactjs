import logo from './logo.svg';
import './App.css';
//import saludar from './saludar.js'
//import { saludar, chau } from './saludar.js'

function App() {

  // saludar()
  // chau()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eos porro illum impedit culpa rem molestias expedita quisquam, perspiciatis adipisci, quibusdam dolorum illo voluptates corrupti laborum commodi veritatis qui ullam.</p>
      <ol>
        <li>nombre</li>
        <li>apellido</li>
        <li>edad</li>
        <li>rol</li>
      </ol>
    </div>
  );
}

export default App;
