import React from 'react';
import './App.css';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController';
import KapyrinKAcontroller from './components/KapyrinKA/KapyrinKAcontroller';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PerederiyVAController />

        <PetrovSDController />

        <KapyrinKAcontroller />


      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
