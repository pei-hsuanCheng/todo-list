import React, {useState} from 'react';
import '../assets/TodoItem.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const {data, handleUpdate} = props;
  const {status, task} = data;

  const handleChange = (type) => {

  }

  return (
    <li className='todo-item flex items-center'>
      <button
        type="button"
        className={`todo-item-status-icon ${status ? 'done' : ''}`}
        onClick={() => handleChange('status')}
      ></button>
      {editing ? (<input type="text" value={task} />) : (<p className='flex-grow text-md'>{task}</p>)}
      <button type="button" onClick={() => handleChange('delete')}>X</button>
      <button type="button" onClick={() => handleChange('update')}>{editing ? 'done' : 'edit'}</button>
    </li>
  )
}

export default TodoItem;