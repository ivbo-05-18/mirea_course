import React from 'react';
import './App.css';
import ExampleController from './components/Example';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController'
import Murashev_Controller from './components/MurashevAS/controller.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <PerederiyVAController/>

        <PetrovSDController/>

        <Murashev_Controller/>

        <ExampleController/>
        
      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
