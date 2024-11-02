Here's a README file that outlines each task and provides an introduction to the project. This README should be added to the root of your repository:

---

# ALX React Fundamentals Project

Welcome to the **ALX React Fundamentals and Core Concepts** project! This project is designed to help you gain a foundational understanding of React, a powerful JavaScript library for building user interfaces. Through a series of guided tasks, you’ll get hands-on experience in setting up a React app, working with JSX, creating and managing components, and passing data with props.

## Table of Contents
- [Project Overview](#project-overview)
- [Objectives](#objectives)
- [Setup Instructions](#setup-instructions)
- [Tasks](#tasks)
  - [Task 0: Create Your First React App](#task-0-create-your-first-react-app)
  - [Task 1: Modify JSX in a Pre-built React Component](#task-1-modify-jsx-in-a-pre-built-react-component)
  - [Task 2: Create Specific Components in a React Application](#task-2-create-specific-components-in-a-react-application)
  - [Task 3: Create a User Profile Card Using Props](#task-3-create-a-user-profile-card-using-props)
- [Resources](#resources)

---

## Project Overview

This project introduces essential elements of React. By engaging with these tasks, you’ll:
- Learn how to set up a React application.
- Gain familiarity with JSX and ReactDOM.
- Practice creating and managing components and props.
- Build simple React applications by combining multiple components.

## Objectives

### 1. Understand the Basics of React:
   - Learn the core purpose of React and why it’s valuable in web development.
   - Set up a new React application and understand the basic file structure.

### 2. Familiarize with ReactDOM and JSX:
   - Understand the role of ReactDOM in rendering React components to the DOM.
   - Use JSX to define UI components.

### 3. Create and Manage React Components:
   - Develop various React components, including functional components.
   - Understand component lifecycle and state management.

### 4. Build and Modify React Applications:
   - Create and customize React applications.
   - Learn to pass data between components using props.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/alx-fe-reactjs.git
   cd alx-fe-reactjs
   ```

2. **Create a New React App Using Vite**
   ```bash
   npm create vite@latest alx-react-app -- --template react
   cd alx-react-app
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   Open your browser and go to `http://localhost:5173`.

---

## Tasks

### Task 0: Create Your First React App
- **Goal:** Set up a new React application using Vite.
- **Instructions:**
  - Initialize an empty repository (`alx-fe-reactjs`).
  - Run `npm create vite@latest alx-react-app -- --template react`.
  - `cd` into `alx-react-app` and run `npm install` and `npm run dev`.
- **Outcome:** You should see your React app running on `localhost:5173`.

### Task 1: Modify JSX in a Pre-built React Component
- **Objective:** Familiarize yourself with JSX syntax.
- **Instructions:**
  - Create a new file `WelcomeMessage.jsx` in `src/components`.
  - Add the following code:
    ```jsx
    function WelcomeMessage() {
      return (
        <div>
          <h1>Hello everyone, I am learning React at ALX!</h1>
          <p>This is a simple JSX component.</p>
          <p>I am learning about JSX!</p>
        </div>
      );
    }
    export default WelcomeMessage;
    ```
  - Import `WelcomeMessage` into `App.jsx` and include `<WelcomeMessage />` inside the return statement.
  - Run `npm run dev` and confirm the component is rendered correctly.

### Task 2: Create Specific Components in a React Application
- **Objective:** Create and integrate multiple React components.
- **Instructions:**
  - Create the following files in `src/components`:
    - **Header.jsx**
      ```jsx
      function Header() {
        return (
          <header>
            <h1>My Favorite Cities</h1>
          </header>
        );
      }
      export default Header;
      ```
    - **MainContent.jsx**
      ```jsx
      function MainContent() {
        return (
          <main>
            <p>I love to visit New York, Paris, and Tokyo.</p>
          </main>
        );
      }
      export default MainContent;
      ```
    - **Footer.jsx**
      ```jsx
      function Footer() {
        return (
          <footer>
            <p>© 2023 City Lovers</p>
          </footer>
        );
      }
      export default Footer;
      ```
  - Import these components into `App.jsx` and include them in the order `<Header />`, `<MainContent />`, and `<Footer />` within the return statement.
  - Run `npm run dev` and confirm that each component displays correctly.

### Task 3: Create a User Profile Card Using Props
- **Objective:** Learn to pass data through props.
- **Instructions:**
  - Create a `UserProfile.jsx` component in `src/components`:
    ```jsx
    const UserProfile = (props) => {
      return (
        <div>
          <h2>{props.name}</h2>
          <p>Age: {props.age}</p>
          <p>Bio: {props.bio}</p>
        </div>
      );
    };
    export default UserProfile;
    ```
  - Import `UserProfile` into `App.jsx` and use it with props, e.g., `<UserProfile name="Alice" age="25" bio="Loves hiking and photography" />`.
  - Run `npm run dev` to verify the data is displayed correctly in the browser.

---

## Resources

- **React Documentation**: [React Docs](https://reactjs.org/docs/getting-started.html)
- **JSX Documentation**: [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)
- **ReactDOM Documentation**: [ReactDOM API](https://reactjs.org/docs/react-dom.html)
- **Vite Documentation**: [Vite Official Guide](https://vitejs.dev/guide/)

---

This project provides a fundamental introduction to React's core concepts, giving you hands-on experience with JSX, components, and props. By completing these tasks, you’ll have a strong base to further explore the capabilities of React!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
