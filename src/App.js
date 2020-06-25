import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Greeter from './artifacts/rps.json';
import drizzleOptions from './drizzleOptions';
import { DrizzleProvider } from '@drizzle/react-plugin';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  AccountData,
  ContractData,
  ContractForm,
  LoadingContainer
} from "@drizzle/react-components";

function App() {
  return (

    <DrizzleProvider options={drizzleOptions}>

   
         <div className="container container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <br />
              <h1 className="m-5 text-light">Decentralized Schere, Stein, Papier!</h1>
              <p className="lead">Darauf hat die Welt gewartet</p>
              <button id="button" type="button" className="btn btn-outline-dark mb-3 p-3 btn-grad" data-toggle="modal" data-target="#staticBackdrop">
                Neues Spiel
              </button>
              <div className="form-group mx-auto" style={{width: '450px'}}>
                  <label htmlFor="formGroupExampleInput2" className="text-light">Sende den Einsatz von 1 ETH an die Auszahl-Adresse:</label>
                  <input type="text" className="form-control" id="receiver" placeholder="e.g. 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae" />
                </div>
              <div id="score" className="score">
                <p>Spieler: 0</p>
                <p>Gegner: 0</p>
              </div>
              <h2 className="m-5">Rock, Paper, Scizzzzor.....</h2>
              <ul className="list-group list-group-horizontal-md">
                <li className="list-group-item flex-fill"><i id="block" className="choice fas fa-cube fa-10x" /></li>
                <li className="list-group-item flex-fill"><i id="toilet-paper" className="choice fas fa-toilet-paper fa-10x" /></li>
                <li className="list-group-item flex-fill"><i id="cut" className="choice fas fa-cut fa-10x" /></li>
              </ul>
              <div className="modal">
                <div id="result" className="modal-content" />
              </div>

          </div>
          </div>
        </div>
       
     
        
    
    </DrizzleProvider>
  );
}

export default App;
