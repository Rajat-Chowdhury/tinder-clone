import React, { useState } from 'react';

import './ChatDetails.css';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const ChatDetails = ( ) => {

    const[input,setInput] = useState('');

    const  [messages, setMessages] = useState([
        {
            name: 'Bruce',
            image:'https://www.pinkvilla.com/files/avengers-endgame-star-mark-ruffalo-celebrates-bruce-banners-50th-birthday-with-an-endearing-post.jpg',
            message: 'Ssup '
        },
        {
            name:'Bruce',
            image:'https://www.pinkvilla.com/files/avengers-endgame-star-mark-ruffalo-celebrates-bruce-banners-50th-birthday-with-an-endearing-post.jpg',
            message:'bruh '
        },
        {
           message:'just in quarantine'
        }
    ])

    const inputSendHandler = (event) =>{
       event.preventDefault(); 
       setMessages([...messages, {message : input}]);
       setInput("");
    }

    return(
        <div className="chatDetails">
            <p className="chatDetails__timestamp">You matched with Bruce on 23/ 5/ 2020</p>
            {messages.map(message => (
                message.name ?
                (
                  <div className="chatDetails__message">
                      <Avatar 
                      className="chatDetails__image" 
                      alt={message.name}
                      src={message.image}   />
                      <p className="chatDetails__text">{message.message}</p>
                  </div>
                )
                :(
                    <div className="chatDetails__message">
                        <p className="chatDetails__textUser">{message.message}</p>
                    </div>
                )
            ))}
            
            <form className="chatDetails__input">
                <input 
                value={input}
                onChange={event => setInput(event.target.value)}
                className="chatDetails__inputField"
                type="text" 
                placeholder="Type a message" />
                <button 
                onClick={inputSendHandler}
                className="chatDetails__inputButton"
                type= "submit" > 
                    <IconButton>
                    <SendIcon
                    className="chatDetails__send"
                    fontSize="large"
                    />

                    </IconButton>
                </button>
            </form>
            


        </div>
    );

}

export default ChatDetails;
