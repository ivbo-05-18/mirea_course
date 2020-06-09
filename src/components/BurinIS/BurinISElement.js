import React from 'react';
import Solver from './Solver';
import GaussianElimElement from '../PerederiyVA/Gauss/GaussianElimElement';
import App from './GithubModule/konvertilo-master/src/app/app';

const BurinISElement = () => (
  <div id="Burin">
    <Solver />
    <GaussianElimElement />
    <App />
  </div>
);

export default BurinISElement;
