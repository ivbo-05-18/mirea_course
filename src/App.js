import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleController from './components/Example';
import PerederiyVAController from './components/PerederiyVA';
import PetrovSDController from './components/PetrovSD/PetrovSDController'
import MiroshnikGKController from './components/MiroshnikGK/MiroshnikGKController';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PerederiyVAController />

        <PetrovSDController />

        <MiroshnikGKController />

        <ExampleController />

      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
