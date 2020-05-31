import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleController from './components/Example';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController'
import BekinaMPController from './components/BekinaMP/BekinaMPController'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BekinaMPController/>

        <PerederiyVAController/>

        <PetrovSDController/>

        <ExampleController/>
        
      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
