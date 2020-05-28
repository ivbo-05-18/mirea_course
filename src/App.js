import React from 'react';
import './App.css';
import ExampleController from './components/ExampleController';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController';
import KomarBGController from './components/KomarBG/KomarBGController';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PerederiyVAController />

        <PetrovSDController />

        <KomarBGController />

        <ExampleController />

      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
