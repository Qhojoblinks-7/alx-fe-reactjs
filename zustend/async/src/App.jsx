import React from 'react';
import JokeFetcher from './components/JokeFetcher'; // Ensure the path matches your project structure

function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <p>If you see this, the App component is working!</p>
      <JokeFetcher />
    </div>
  );
}


export default App;
