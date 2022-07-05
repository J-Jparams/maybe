import logo from './logo.svg';
import './App.css';



function App() {
const navigate = userNavigate();

  return (
    <div className="App">
      <hi> Home Page </hi>
      <button onClick={() => navigate("")}>NEXT</button>
    </div>
  );
}

export default App;
