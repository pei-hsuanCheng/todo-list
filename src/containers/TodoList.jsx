import React from 'react';
import TodoItem from "../components/TodoItem";
import '../assets/TodoList.css';

const TodoList = (props) => {
  const {tasks, handleUpdate} = props;

  return (
    <div className="todo-list-main">
      <ul className="todo-list">
        {tasks.map((item, idx) => <TodoItem key={item.id} data={item} handleUpdate={(value) => handleUpdate(value, idx)}/>)}
      </ul>
    </div>
  )
}

export default TodoList;