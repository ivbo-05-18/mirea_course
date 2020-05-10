import React from 'react';
import PerederiyVA from './components/PerederiyVA/MainComponent';

const App = props => {
  return (
    <div className="App">
      <header style={{minHeight: "0px"}} className="App-header">
        
        <PerederiyVA/>
        
      </header>
    </div>
  );
}

// Add only top-level component to the App

export default App;
