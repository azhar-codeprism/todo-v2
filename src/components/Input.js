import { useState } from "react";

function Input({ addTask }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const event = {
      title: taskName,
      completed: false,
      id: Math.floor(Math.random() * 100000),
    };
    addTask(event);
    console.log(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter a task..."
        required
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
export default Input;
