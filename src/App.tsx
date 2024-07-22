import AddToDo from "./components/AddToDo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import './App.css'
function App() {

  
  return (
    <main>
      <h1>Todo React + Typescript</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
}

export default App;
