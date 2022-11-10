import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className="challenge">
          <h1>Desafio 1</h1>
        </div>
        <div className="challenge">
          <h1>Desafio 2</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
