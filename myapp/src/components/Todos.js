import React from "react";

const Todos = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div>
      <ul className="allTodos">
        {todos.map((todo) => (
          <li className="singletodo" key={todo.id}>
            <span className="todotext">{todo.todo}</span>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
