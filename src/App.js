import React from 'react';
import './App.css';
import ExampleController from './components/ExampleController';
import VyrupaevaMAController from './components/VyrupaevaMA';
import PetrovSDController from './components/PetrovSD/PetrovSDController';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <VyrupaevaMAController />

        <PetrovSDController />

        <ExampleController />

      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
