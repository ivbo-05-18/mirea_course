import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleController from './components/Example';
import VelikanovKYController from './components/VelikanovKY/Velikanov';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VelikanovKYController />
        <ExampleController/>
        
      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
