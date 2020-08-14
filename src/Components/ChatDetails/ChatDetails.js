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
            <p className="chatDetails__timestamp">You matched with Bruce on 23/ 5/ 2020</p>
            {messages.map(message => (
                message.name ?
                (
                  <div className="chatDetails__message">
                      <Avatar 
                      className="chatScreen__image" 
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

        </div>
    );

}

export default ChatDetails;
