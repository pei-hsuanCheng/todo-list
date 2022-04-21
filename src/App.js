import React, { useState } from "react";
import TodoList from "./containers/TodoList";
import "./assets/App.css";
import TodoForm from "./components/TodoForm";

const data = [
  {
    id: 1,
    task: "待辦事項1",
    status: false,
  }, {
    id: 2,
    task: "待辦事項2",
    status: false,
  }, {
    id: 3,
    task: "待辦事項3",
    status: false,
  }, {
    id: 4,
    task: "待辦事項4",
    status: false,
  }, 
]

export default function App() {
  const [tasks, setTasks] = useState(data);

  const handleUpdate = (newValue, idx) => {
    const newTasks = [...tasks];
    if (!idx && idx !== 0) {
      const newIdx = Math.max(newTasks.map(task => task.id));
      newValue = {
        id: newIdx + 1,
        task: newValue,
        status: false,
      };
      newTasks.push(newValue);
    }
    if (newValue) newTasks[idx] = {...newValue};
    if (!newValue) newTasks.splice(idx, 1);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <h1 className='text-center'>Todo List</h1>
      <TodoForm handleUpdate={handleUpdate} />
      <TodoList tasks={tasks} handleUpdate={handleUpdate} />
    </div>
  )
}

