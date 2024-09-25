import {useState} from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {

  const { 
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo 
  } = useTodo();

  return (
    <>
      <section className="card-to-do">
        <h1> Lista de Tareas</h1>
        <section className="counter-todos">
          <h3> N Tareas: <span>{todosCount}</span></h3>
          <h3> Pendientes: <span>{pendingTodosCount}</span></h3>
        </section>

        <section className='add-todo'>
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo}/>
        </section>

        <TodoList 
          todos ={todos}
          handleUpdateTodo = {handleUpdateTodo}
          handleDeleteTodo = {handleDeleteTodo}
          handleCompleteTodo = {handleCompleteTodo}
        />
      </section>
    </>
  )
}

export default App;