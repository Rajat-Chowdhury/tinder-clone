import React, { Component } from 'react';
import Chat from '../../Components/Chat/Chat';

import './Chatpage.css';

class Chatpage extends Component {

    render(){
        return(
            <div className ="chats">
                <Chat
                    name="Hulk"
                    message = " I'm always angry"
                    timestamp = "40 seconds ago"
                    profilePic = "..."
                />
                <h1>I am an individual chat </h1>
            </div>
        )
    }

}


export default Chatpage;