import logo from './logo.svg';
import './App.css';

import Paragraph from './components/paragraph/paragraph'
import Button from './components/button/button'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <div className="challenge">
          <h1>Desafio 1</h1>
          <Paragraph text_color="#282c34">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates consectetur repellat velit laborum molestiae, earum assumenda dolore deleniti magnam voluptas placeat ratione blanditiis ut saepe necessitatibus commodi eveniet. Ducimus!
          </Paragraph>
        </div>
        <div className="challenge">
          <h1>Desafio 2</h1>
          <Button label="Olá Mundo :D" />
        </div>
      </main>
    </div>
  );
}

export default App;
