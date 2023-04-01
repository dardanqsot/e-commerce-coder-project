import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <ItemListContainer saludo ='Bievenidos a Algoritmia Store! Productos Informáticos de gran variedad!'/>
    </div>
  );
}

export default App;
