import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const [allTasks, setAllTasks] = useState([]);

  function addTask(taskData) {
    setAllTasks([...allTasks, taskData]);
  }

  function deleteHandler(id) {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  }

  function completeHandler(id) {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }
  return (
    <div className="App">
      <Input addTask={addTask} />
      {allTasks.map((task) => {
        return task.completed === false ? (
          <div key={task.id}>
            <Card
              task={task}
              deleteHandler={() => deleteHandler(task.id)}
              completeHandler={() => completeHandler(task.id)}
            />
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default App;
