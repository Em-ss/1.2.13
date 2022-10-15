import Task from "./task";

// import './todo-list.css'
const TaskList  = (props) => {

//   const elements = todos.map((item) => {
//     return (
//       <li className = "list-group-item">
//         <TodoListItem {...item} />
//       </li>
//     );
//   })
    return (
        <ul className = "list-group todo-list">
       <Task todos = {props} className='completed'/>
       <Task todos = {props} className='editing'/>
       <Task todos = {props} />
        </ul>
    ) 
    };

    export default TaskList ;