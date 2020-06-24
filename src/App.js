import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Greeter from './artifacts/Greeter.json';
import drizzleOptions from './drizzleOptions';
import { DrizzleProvider } from '@drizzle/react-plugin';

// Tells Drizzle what we need to run the smart contract
//Create a drizzleOptions object and pass in the desired contract artifacts for Drizzle to instantiate.


function App() {
  return (
    <DrizzleProvider options={drizzleOptions}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
      <a className="navbar-brand" href="#">Block, (Toilet-)Paper, Scissors</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Spiel
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Anleitung</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </DrizzleProvider>
  );
}

export default App;
