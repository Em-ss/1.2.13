import TasksFilter from './task-filte';

function Footer({ filter, onFilterChange, deleteAll, value }) {
  return (
    <footer className="footer">
      <span className="todo-count">{value} items left</span>
      <TasksFilter onFilterChange={onFilterChange} filter={filter} />
      <button className="clear-completed" onClick={deleteAll}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
