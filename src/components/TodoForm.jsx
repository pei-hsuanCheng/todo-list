import React, { useRef } from 'react';
import "../assets/TodoForm.css";
import Button from './Button';

const TodoForm = (props) => {
  const {handleUpdate} = props;
  const inputRef = useRef();

  const handleAdd = () => {
    handleUpdate(inputRef.current.value);
    inputRef.current.value="";
  }

  return (
    <div className='flex'>
      <input className="todoForm-input flex-grow" type="text" placeholder="代辦事項名稱" ref={inputRef}/>
      <Button className="flex-shirink-0" variant="contained" size="md" color="secondary" onClick={handleAdd}>新增</Button>
    </div>
  )
}

export default TodoForm;