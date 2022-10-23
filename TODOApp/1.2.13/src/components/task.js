
// import './todo-list-item.css'
const Task = (props) => {
    
    // const style = {
    //     color: important ? 'tomato ' : 'black'
    // };
    
    return (
      <li>
      <div className='view'>
        <input className='toggle' type="checkbox" />
          <label>
            <span className='description'>Completed task</span>
            <span className='created'>created 17 seconds ago</span>
          </label>
          <button className='icon icon-edit'></button>
          <button className='icon icon-destroy'></button>
      </div>
    </li>
    );
};

export default Task;
