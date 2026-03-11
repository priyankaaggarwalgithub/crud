import React from "react";

const Todoform = ({ handleSubmit, todo, settodo, edit }) => {
  return (
    <div>
      {" "}
      <form
        action=""
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "450px",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={todo}
          style={{
            width: "80%",
            padding: "10px",
            borderRadius: "20px",
            border: "none",
          }}
          onChange={(e) => settodo(e.target.value)}
        />
        <button disabled={!todo.trim()}>{edit ? "Edit" : "Go"}</button>
      </form>
    </div>
  );
};

export default Todoform;
