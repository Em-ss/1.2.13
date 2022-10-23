import React from 'react';
import TasksFilter from "./task-filte";

const Footer = ({filter,onFilterChange}) => {
    
   

    // const onFilterChange = (name) => {
    //   console.log('asss')
    //   // const ver = () => onFilterChange(name1)
    // }
      
    const act = 'active';


    
    return (
        <footer class="footer">
        <span class="todo-count">1 items left {filter}</span>
        <TasksFilter   filter={act}/>
        <button class="clear-completed">Clear completed</button>
      </footer>
    );
};

export default Footer;