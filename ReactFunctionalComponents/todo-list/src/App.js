import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App container">
      <h1>Tasks!</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
