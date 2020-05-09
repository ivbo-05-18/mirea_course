import React from 'react';
import './App.css';
import PerederiyVAController from './components/PerederiyVA/Controller';

function App() {
  return (
    <div className="App">
      <header style={{minHeight: "0px"}} className="App-header">
        
        <PerederiyVAController/>
        
      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
