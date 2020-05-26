import React from 'react';
import './App.css';
import ExampleController from './components/ExampleController';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController';
import VeselayaEAController from './components/VeselayaEA/VeselayaEAController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VeselayaEAController />

        <PerederiyVAController />

        <PetrovSDController />

        <ExampleController />

      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
