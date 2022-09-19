import './App.css';
import NavBar from './components/navigationBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Welcome to Gamestore!" />
    </div>
  );
}

export default App;
