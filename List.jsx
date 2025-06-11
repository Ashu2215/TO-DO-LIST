import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleAddTask() {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      // Edit mode
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add mode
      setTasks([...tasks, input]);
    }
    setInput("");
  }

  function handleDeleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleEditTask(index) {
    setInput(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <h1>TODOLIST</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
            <button onClick={() => handleEditTask(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>{editIndex !== null ? "Update" : "Add"}</button>
    </div>
  );
}

export default App;
