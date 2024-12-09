import React, { useState } from 'react'
import useAppStore from '../store/useAppStore';

function App() {
  //Counter state
  const {count, increment, decrement, reset} = useAppStore();

  //To-do state
  const {todoList, addTodo, removeTodo} = useAppStore();
  const [todoInput, setTodoInput] = useState('');


  return(
    <div style={{textAlign: 'center', marginTop: '50px',}}>
      {/*counter section*/}
  
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>Reset</button>
  
      {/*Todo section*/}
  
      <h2>To-Do List</h2>
      <input type='text'
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
        placeholder='Add a new Todo'
        />
        <button
          onClick={() => {
            if (todoInput.trim()){
              addTodo(todoInput.trim());
              setTodoInput('');
            }
          }}
          >Add To-Do</button>
  
          <ul>
            {todoList.map((todo, index) =>(
              <li key={index}>
                {todo}{' '}
                <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
            ))}
            </ul>
    </div>
  );
  
}

export default App;