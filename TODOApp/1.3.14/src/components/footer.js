import TasksFilter from "./task-filte";

const Footer = ({filter,onFilterChange,deleteAll,value} ) => {
    


  
    
    return (
        <footer class="footer">
        <span class="todo-count">{value} items left</span>
        <TasksFilter
        //  onActiveItem={onActiveItem}
        // onAllItem={onAllItem}
        // onCompletedItem={onCompletedItem}
        onFilterChange = {onFilterChange}
        filter = {filter}
         />
        <button class="clear-completed" onClick={deleteAll}>Clear completed</button>
      </footer>
    );
};

export default Footer;