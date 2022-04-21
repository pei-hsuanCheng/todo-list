import React, {useState, useRef} from 'react';
import '../assets/TodoItem.css';
import Button from './Button';

const TodoItem = (props) => {
  const {data, handleUpdate} = props;
  const {status, task} = data;
  const [editing, setEditing] = useState(false);
  const taskRef = useRef(task);

  const handleChange = (type) => {
    let newData = {...data};

    if (!type) newData = null;

    if (type === 'status') newData.status = !status;

    if (type === 'task') newData.task = taskRef.current.value;

    handleUpdate(newData);
  }

  return (
    <li className='todo-item flex items-center'>
      <button
        type="button"
        className={`todo-item-status-icon ${status ? 'done' : ''}`}
        onClick={() => handleChange('status')}
      ></button>
      {
        editing
        ?
        (<>
          <input type="text" className="flex-grow text-md" ref={taskRef} defaultValue={task} />
          <Button color="primary" variant="contained" onClick={() => {handleChange('task'); setEditing(c => !c);}}>編輯完成</Button>
        </>)
        :
        (<>
          <p className={`todo-item-task flex-grow text-md ${status && 'done'}`}>{task}</p>
          <Button color="primary" variant="outlined" onClick={() => handleChange()}>刪除</Button>
          <Button color="primary" variant="contained" onClick={() => setEditing(c => !c)}>編輯</Button>
        </>)
      }
    </li>
  )
}

export default TodoItem;