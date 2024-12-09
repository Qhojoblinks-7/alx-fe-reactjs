import React, { useContext } from 'react';
import { AppContext } from './contextAPIFormValidation';

const Dashboard = () => {
  const { user, login, logout } = useContext(AppContext);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.username}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Log In</h2>
          <button onClick={() => login('John Doe')}>Login</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
