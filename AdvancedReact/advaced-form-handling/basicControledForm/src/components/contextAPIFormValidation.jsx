// Next Concept: Managing State with Context API
// When building larger React applications, prop drilling can become problematic. To avoid passing props down multiple levels, React's Context API allows you to share state across your application without explicitly passing props through every component.

// We'll learn how to:

// Set up Context Provider to share state.
// Consume shared state with useContext.
// Understand how this improves state management by avoiding prop drilling.
// Concept Breakdown
// Create a Context - Set up a state management store.
// Create a Provider - Use the context provider to wrap components that need access to shared state.
// Consume Context - Use useContext in components to interact with shared state.
// Let's Start Step-by-Step:
// Step 1: Create the Context
// We'll define a global state using the Context API.




import React, { createContext, useState} from 'react';

//App context API
export const AppContext = createContext();

//Provider to share state
export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({username});
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AppContext.Provider value={{user, login, logout}}>
            {children}
        </AppContext.Provider>
    );
}


// Explanation of context.js
// Create the Context

// jsx
// Copy code
// export const AppContext = createContext();
// createContext() creates a context object that can hold global states or functions.
// AppProvider Component

// jsx
// Copy code
// export const AppProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
// This is the provider component responsible for setting up shared states (user) and functions (login & logout).
// Login & Logout Functions

// jsx
// Copy code
// const login = (username) => {
//   setUser({ username });
// };

// const logout = () => {
//   setUser(null);
// };
// Functions to control user login/logout behavior.
// Pass Data to Context

// jsx
// Copy code
// <AppContext.Provider value={{ user, login, logout }}>
//   {children}
// </AppContext.Provider>
// The value prop provides shared state and actions (user, login, logout) to all components using useContext.