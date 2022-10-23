import React, { Component } from 'react';
// import './todo-list-item.css'
export default class Task extends Component {


    render() {
      const {label,onDeleted,completed,onToggleDone,filter} = this.props;
   

   let classNames = '';
   if (completed) {
    classNames += 'completed'
   }
   
      return (
        <li className={classNames}>
        <div className='view'>
          <input className='toggle' type="checkbox" />
            <label>
              <span className='description' onClick={onToggleDone} >{label}</span>
              <span className='created' >created 17 seconds ago{filter}</span>
            </label>
            <button className='icon icon-edit'></button>
            <button className='icon icon-destroy' onClick={onDeleted}></button>
        </div>
      </li>
      );
    }

};

