import React from 'react';

import Task from "./task";

// import './todo-list.css'
const TaskList  = ({todos,onDeleted,onToggleDone,filter}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      
        <Task key={id} {...itemProps} 
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        filter={filter}
        />
  
    );
  })
    return (
        <ul className = "todo-list">
       {elements}
        </ul>
    ) 
    };

    export default TaskList ;