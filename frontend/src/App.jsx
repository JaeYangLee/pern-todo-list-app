import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 p-4 ">
        <ToDoForm />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
