import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem'

function App() {
  return (
    <div className="App">
      <MenuItem dishName= {"Fish Tacos"} price = {12.99} likes = {50}></MenuItem>
      <MenuItem dishName= {"Salmon"} price = {23.99} likes = {62}></MenuItem>
      <MenuItem dishName= {"Tuna Melt"} price = {11.99} likes = {17}></MenuItem>
      <MenuItem dishName= {"Steak"} price = {35.99} likes = {80}></MenuItem>
    </div>
  );
}

export default App;
