import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from './Components/Header/Header';
import Homepage from './Containers/Homepage/Homepage';
import Chatpage from './Containers/Chatpage/Chatpage';
import ChatScreen from './Containers/ChatScreen/ChatScreen';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        
        <Switch>
          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chatpage/>
          </Route>
          <Route path="/">
            <Header/>
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
