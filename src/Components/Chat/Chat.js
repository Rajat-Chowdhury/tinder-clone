import React from 'react';

import Avatar from '@material-ui/core/Avatar';

import './Chat.css';


const Chat = (props) => {

    return(
        <div className= "chat">
            <Avatar 
            className="chat__image" 
            alt={props.name}
            src={props.profilePic}   />
            <div className="chat__details">
                <h3>{props.name} </h3>
                <p> {props.message} </p>
            </div>
            <p className="chat__timestamp"> {props.timestamp} </p>
        </div>
    )
    

}

export default Chat;