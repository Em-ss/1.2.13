const TasksFilter  = (pops) => {
    
    // const style = {
    //     color: important ? 'tomato ' : 'black'
    // };
    
    return (
        <ul class="filters">
            <li>
              <button class="selected">All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>
    );
};

export default TasksFilter 