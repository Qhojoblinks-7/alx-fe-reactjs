---

# ALX React App - Enhanced Version

This is an enhanced version of the previous React application, now named **alx-react-app-new**. The app includes new inline CSS styling for existing components and a simple counter application using React state and hooks.

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/alx-fe-reactjs.git
   ```

2. **Navigate to the New Directory**:
   ```bash
   cd alx-fe-reactjs/alx-react-app-new
   ```

3. **Install Dependencies**:
   Install the required dependencies:
   ```bash
   npm install
   ```

4. **Start the Project**:
   Run the following command to start the development server:
   ```bash
   npm start
   ```

   This will start the project at `http://localhost:3000` in your web browser.

## Project Structure

The application now includes **inline CSS styling** and a **counter component** created with React hooks.

### Directory Structure

```
alx-react-app-new/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── Header.jsx
    │   ├── UserProfile.jsx
    │   ├── MainContent.jsx
    │   ├── Footer.jsx
    │   └── Counter.jsx
    ├── App.jsx
    └── index.js
```

### Components

#### Header Component (Header.jsx)

The `Header` component displays the application title and now includes inline styling.

```jsx
<header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
  <h1>My Favorite Cities</h1>
</header>
```

#### UserProfile Component (UserProfile.jsx)

The `UserProfile` component displays the user’s name, age, and bio. Inline styling has been added to enhance the layout.

```jsx
<div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
  <h2 style={{ color: 'blue' }}>{props.name}</h2>
  <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
  <p>Bio: {props.bio}</p>
</div>
```

#### MainContent and Footer Components

The `MainContent` and `Footer` components also have inline styling applied to make them visually appealing. Experimentation with background colors, padding, margins, and text colors is encouraged.

### Counter Component (Counter.jsx)

The `Counter` component allows users to increment, decrement, and reset a counter value. It demonstrates state management in React using the `useState` hook.

**Counter.jsx**:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

This component includes three buttons:
- **Increment**: Adds 1 to the current count.
- **Decrement**: Subtracts 1 from the current count.
- **Reset**: Resets the count to 0.

### Adding the Counter Component to App.jsx

Import and include the `Counter` component in **App.jsx** to display it within the application:

```jsx
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age={30} bio="A passionate traveler and foodie." />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
```

## Running the Application

To test the project:

1. Run the project with `npm start`.
2. Open `http://localhost:3000` in your browser.
3. Verify that:
   - All components have inline CSS styling applied.
   - The `Counter` component correctly increments, decrements, and resets the count.

## Repo

GitHub repository: **alx-fe-reactjs**
- Directory: `alx-react-app-new`

## License

This project is open-source and available under the [MIT License](LICENSE).

---