import React from 'react';
import ReceiptForm from './components/AddReceiptForm';
import ReceiptList from './components/ReceiptList';
import './App.css';

const App = () => {
  return (
    <div>
      <header className="app-header">
        <h1>Welcome to the Receipt Sharing App</h1>
        <p>Share and manage your receipts with ease, inspired by African design!</p>
      </header>
      <main>
        <ReceiptForm />
        <ReceiptList /> {/* Add ReceiptList component here */}
      </main>
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} Receipt Sharing App. Made with ❤️ for a brighter Africa.
        </p>
      </footer>
    </div>
  );
};

export default App;
