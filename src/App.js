import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleController from './components/Example';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController'
import KlevleevVRController from './components/KlevleevVR/KlevleevVRController';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <PerederiyVAController/>

        <PetrovSDController/>

        <KlevleevVRController/>

        <ExampleController/>
        
      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
