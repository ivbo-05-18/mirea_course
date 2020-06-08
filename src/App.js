import React from 'react';
import './App.css';
import KarpikAAController from './components/KarpikAA/KarpikAAController';
import ExampleController from './components/Example';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PerederiyVAController />

        <PetrovSDController />

        <ExampleController />

        <KarpikAAController />

      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
