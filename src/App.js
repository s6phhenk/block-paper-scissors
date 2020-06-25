import React, {Component} from 'react';

/*Importing Components*/
import { NavigationBar } from './components/NavigationBar';

/*Importing Drizzle Dependencies*/
import drizzleOptions from './drizzleOptions';
import { DrizzleProvider } from '@drizzle/react-plugin';
import { AccountData, ContractData, ContractForm, LoadingContainer } from "@drizzle/react-components";

/* React Router */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Spiel} from './Spiel';
import {Kontakt} from './Kontakt';
import {Anleitung} from './Anleitung';
import {NoMatch} from './NoMatch';

/* Importing the Smart Contract */
import Greeter from './artifacts/rps.json';

const App = () => {
  return (
  <React.Fragment>
     <DrizzleProvider options={drizzleOptions}> 
      <Router>
        <Switch>
          <Route exact path="/" component={Spiel}></Route>
          <Route path="/Anleitung" component={Anleitung}></Route>
          <Route path="/Kontakt" component={Kontakt}></Route>
          <Route component={NoMatch}></Route>

        </Switch>
      </Router>

      <NavigationBar/>
    <Spiel/>
   
       
      </DrizzleProvider>
    </React.Fragment>
  );
}

export default App;
