import React from 'react';
import useCounterStore from '../store/counterStore';
import useDashboardStore from '../store/useDashboardStore';


function App(){
    // const {count, increment, decrement, reset} = useCounterStore();
  // return(
  //   <div style={{textAlign: 'center', marginTop: '50px'}}>
  //       <h1>Counter: {count}</h1>
  //       <button onClick={increment}>increment</button>
  //       <button onClick={decrement}>decrement
  //       </button>
  //       <button onClick={reset}>reset</button>
  //   </div>
  // )

  const {
    user,
    login,
    logout,
    updateUser,
    tasksList,
    addTask,
    completeTask,
    removeTask,
  } = useDashboardStore();
  return(
    <div>
      <h1>User Dashboard</h1>
      <div>
        {user.isAuthenticated ? (
          <div>
            <p>Welcome, {user.name}</p>
            <button onClick={logout}>Logout</button>
          </div>
      ) : (
        <div>
            <button onClick={() => login('John Doe', 'john@example.com')}>
                  Login as John Doe
            </button>
        </div>
      )}
      </div>

      <div>
        <h2>Tasks</h2>
        <ul>
          {tasksList.map((task, taskIndex) =>(
            <li key={taskIndex}>
              {task.title} - {task.completed ? 'completed' : 'Incomplete'}
              <button onClick={() => completeTask(taskIndex)}>Complete</button>
              <button onClick={() => removeTask(taskIndex)}>Remove</button>
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            addTask({title: `Task ${taskList.length + 1}`})
            }
            >
              Add Task
            </button>
      </div>
    </div>
  );
}

export default App
