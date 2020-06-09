import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import './styles/index.css';
import levelFactory from './lib/levels-factory';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

const FifteenGame = () => (
  <MuiThemeProvider>
    <App level={levelFactory(4 ** 2)} />
  </MuiThemeProvider>
);

export default FifteenGame;
