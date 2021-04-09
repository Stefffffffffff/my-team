import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="table1">
          <tr className="table1">
        <img src={logo} className="App-logo" alt="logo" />
        </tr>
        <tr className="table1">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul>
          <li>Stefano Mihallari</li><li>Scooby</li><li>o Mihallari</li>
          </ul>
        </a></tr>
        </table>
      </header>
    </div>
  );
}

export default App;
