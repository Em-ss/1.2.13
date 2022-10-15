import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import TaskList  from './components/task-list';

const root = ReactDOM.createRoot(document.getElementById('todoapps'));

const todoData = {};
root.render(
  (
    <div>
      <NewTaskForm />
      <section class="main">
      <TaskList todos = {todoData}/> 
      <Footer />
      </section>
    </div>
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




