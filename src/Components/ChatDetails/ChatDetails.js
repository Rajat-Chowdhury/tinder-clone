import React, { useState } from 'react';

import './ChatDetails.css';

import Avatar from '@material-ui/core/Avatar';

const ChatDetails = ( ) => {

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

    return(
        <div className="chatDetails">
            <h2>Chat details screen</h2>
            <p>You matched with Bruce on 23/ 5/ 2020</p>
            {messages.map(message => (
                <div className="chatDetails__message">
                    <Avatar 
                    className="chatScreen__image" 
                    alt={message.name}
                    src={message.image}   />
                    <p>{message.message}</p>
                </div>
            ))}

        </div>
    );

}

export default ChatDetails;
