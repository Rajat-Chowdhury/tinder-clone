import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from './Components/Header/Header';
import Homepage from './Containers/Homepage/Homepage';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/chat">
            <h1>I am a chat page</h1>
          </Route>
        
          <Route path="/">
            <h1>I am a homepage</h1>
            <Homepage/>
          </Route>
        </Switch>
        {/* tinder carrds */}
        {/* buttons below tinder cards */}

        {/* chat screen */}
        {/* individual chat screen */}

      </BrowserRouter>
    
    </div>
  );
}

export default App;
