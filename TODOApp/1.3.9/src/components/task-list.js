import Task from "./task";

// import './todo-list.css'
const TaskList  = ({todos,onDeleted}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      
        <Task key={id} {...itemProps} 
        onDeleted={() => onDeleted(id)}
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