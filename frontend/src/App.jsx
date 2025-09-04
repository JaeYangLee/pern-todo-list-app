import ToDoFooter from "./components/ToDoFooter";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./index.css";

function App() {
  return (
    <>
      <main className="flex flex-col items-center w-screen h-screen gap-2 px-4 ">
        <ToDoForm />
        <ToDoList />
      </main>

      <ToDoFooter />
    </>
  );
}

export default App;
