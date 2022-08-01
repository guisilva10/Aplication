import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import './Task.css'; 
import {useHistory} from 'react-router-dom';

const Task = ({task , handleTaskClick, handleRemoveTask}) => {

    const history = useHistory();

    const handleTaskDetailsClick = () =>{
      history.push(`/${task.title}`);
    };

  return (
    <div className='task-container'  style={task.completed ? {borderLeft:'6px solid chartreuse'}:{}}>
         <div className='task-title' onClick={() => handleTaskClick(task.id)}>
          {task.title}
         </div>
         <div className='buttons-container'>
          <button onClick={() => handleRemoveTask(task.id)} className='remove-task-button'>
            <CgClose/>
            </button>
          </div> 
          <button className='see-task-details-button' onClick={handleTaskDetailsClick}>
            <CgInfo/>
            </button>
          </div> 
  );

}    
 
export default Task;