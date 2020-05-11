import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleController from './components/Example';
import VelikanovKYController from './components/VelikanovKY/VelikanovKYController';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VelikanovKYController />
        
        <PerederiyVAController/>

        <PetrovSDController/>

        <ExampleController/>
        
      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
