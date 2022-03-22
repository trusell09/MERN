import logo from './logo.svg';
import './App.css';
import PokemonGenerator from './components/PokemonGenerator';
import PokemonGeneratorWithAxios from './components/PokemonGeneratorWithAxios';

function App() {
  return (
    <div className="App">
      <h1>POKEMON!</h1>
      {/* <PokemonGenerator></PokemonGenerator> */}
      <PokemonGeneratorWithAxios></PokemonGeneratorWithAxios>
    </div>
  );
}

export default App;
