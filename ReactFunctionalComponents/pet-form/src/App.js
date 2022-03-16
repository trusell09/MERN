import logo from './logo.svg';
import './App.css';
import Petform from './components/Petform';


function App() {
  return (
    <div className="App container"> 
    {/* container above helps manage the size of the input sections created by bootstrap */}
      <h1 className="text-success"> Dojo Pet - First Time Using Bootstrap!</h1>
      <Petform></Petform>
    </div>
  );
}

export default App;
