import logo from './logo.svg';
import './App.css';

function App() {
  
  const TitleNew = () => <h1 className='saurabh'>testing JSX</h1>
  const saurabh = <h1>saurabh element</h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Saurabh is testing
          <div>Testingnpm</div>
          babli
          {saurabh}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TitleNew />
      </header>
    </div>
    
  );

}

export default App;
