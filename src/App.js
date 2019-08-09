import React from 'react';
import { HashRouter as Router,Route,Switch} from 'react-router-dom'//stores all of our routes
import Contacts from './components/Contacts/Contacts';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.css';

import {Provider} from './Context';


//pages
import AddContact from './components/Contacts/AddContact';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Test from './components/test/Test';
import EditContact from './components/Contacts/EditContact';


import './App.css';
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager"/>
            <div className="container">
              <Switch>
                <Route exact path="/" 
                component={Contacts}/>
                <Route exact path="/contact/add" 
                component={AddContact}/>
                <Route exact path="/contact/edit/:id"
                component={EditContact}/>
                <Route exact path="/about" 
                component={About}/>
                <Route exact path="/test" 
                component={Test}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
      
        </div>
      </Router>
         
    </Provider>
   
  );
}

export default App;
