import React, {Component} from 'react';

/*Importing Components*/
import { NavigationBar } from './components/NavigationBar';
import {Layout} from './components/Layout';


/* React Router */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Spiel} from './Spiel';
import {Kontakt} from './Kontakt';
import {Anleitung} from './Anleitung';
import {NoMatch} from './NoMatch';

/* Importing the Smart Contract */
import Greeter from './artifacts/rps.json';

const App = () => {
  return (
  <React.Fragment>
    
      <Layout>
      <Router>
      <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Spiel}></Route>
          <Route path="/Anleitung" component={Anleitung}></Route>
          <Route path="/Kontakt" component={Kontakt}></Route>
          <Route component={NoMatch}></Route>

        </Switch>
      </Router>

      
      </Layout>
    </React.Fragment>
  );
}

export default App;
