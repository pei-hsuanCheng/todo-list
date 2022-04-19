import React, { useState } from 'react';
import TodoItem from "../components/TodoItem";
import '../assets/TodoList.css';
const data = [
  {
    id: 1,
    status: false,
    task: "待辦事項1",
  }, {
    id: 2,
    status: false,
    task: "待辦事項2",
  }, {
    id: 2,
    status: false,
    task: "待辦事項3",
  }, {
    id: 3,
    status: false,
    task: "待辦事項4",
  }, 
]
const TodoList = () => {
  const [tasks, setTasks] = useState(data);

  const handleUpdate = (newValue) => {
    const newTask = [...tasks];
    newValue.id = newTask[newTask.length-1].id + 1;
    newTask.push(newValue);
    setTasks(newTask);
  }

  return (
    <div className="todo-list">
      <h1 className='text-center'>Todo List</h1>
      <ul>
        {tasks.map((item) => <TodoItem key={item.id} data={item} handleUpdate={(value) => handleUpdate(value)}/>)}
      </ul>
    </div>
  )
}

export default TodoList;