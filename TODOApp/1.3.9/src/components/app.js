import React, { Component } from 'react';
// import './app.css';

import NewTaskForm from './new-task-form';
import Footer from './footer';
import TaskList  from './task-list';



export default class App extends Component {
    maxId = 100;

    state = {
      todoData: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 }
      ]
    };

    
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
          const idx = todoData.findIndex((el) => el.id === id);
    
          const newArray = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)
          ];
    
          return {
            todoData: newArray
          };
        });
      };
    

    
    render() {
      return  (
            <div>
              <NewTaskForm />
              <section className="main">
              <TaskList todos = {this.state.todoData}
              onDeleted={ this.deleteItem }/> 
              <Footer />
              </section>
            </div>
          )
    }
};