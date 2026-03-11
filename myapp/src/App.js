import { useState } from "react";
import "./App.css";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [edit, setEditId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      const updatedtodo = todos.map((t) =>
        t.id === edit ? { ...t, todo } : t,
      );
      settodos(updatedtodo);
      setEditId(null);
      settodo("");
    } else {
      settodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
      settodo("");
    }
  };
  const handleDelete = (id) => {
    const filtereData = todos.filter((todo) => todo.id !== id);
    settodos(filtereData);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    settodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: "#282c34",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          height: "80vh",
          padding: "20px",
          border: "1px solid grey",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "20px",
          color: "white",
        }}
      >
        <h1>ToDo List App</h1>
        <Todoform
          handleSubmit={handleSubmit}
          todo={todo}
          settodo={settodo}
          edit={edit}
        />
        <Todos
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
