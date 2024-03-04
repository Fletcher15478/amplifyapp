import logo from './logo.svg';
import Navbar from './Navbar';
import Card from './Card'
import './App.css';

function App() {
  return (
    <div className="App">
          <Navbar />
          <header className="App-header">
          <h1> CS 230L</h1>
          <h2> Section -002</h2>
          <p>WVU ID: 800336065</p>
          <p>Hi I am Fletcher</p>
          </header>
          <Card />
    </div>
  );
}

export default App;
