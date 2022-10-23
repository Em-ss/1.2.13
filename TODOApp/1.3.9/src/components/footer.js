import TasksFilter from "./task-filte";

const Footer = (pops) => {
    
    // const style = {
    //     color: important ? 'tomato ' : 'black'
    // };
    
    return (
        <footer class="footer">
        <span class="todo-count">1 items left</span>
        <TasksFilter/>
        <button class="clear-completed">Clear completed</button>
      </footer>
    );
};

export default Footer;