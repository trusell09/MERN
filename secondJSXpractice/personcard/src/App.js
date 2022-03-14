import logo from './logo.svg';
import './App.css';
import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
      <h1>PersonCard</h1>
      <Personcard firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}></Personcard>
      <Personcard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}></Personcard>
      <Personcard firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"}></Personcard>
      <Personcard firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"}></Personcard>
    </div>
  );
}

export default App;
