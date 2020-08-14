import React, { Component } from 'react';
import Chat from '../../Components/Chat/Chat';

import './Chatpage.css';

class Chatpage extends Component {

    render(){
        return(
            <div className ="chats">
                <Chat
                    name="Bruce Banner"
                    message = " I'm always angry"
                    timestamp = "40 seconds ago"
                    profilePic = "https://www.pinkvilla.com/files/avengers-endgame-star-mark-ruffalo-celebrates-bruce-banners-50th-birthday-with-an-endearing-post.jpg"
                />
                <Chat
                    name="Black Widow"
                    message = " I got red in my ledger"
                    timestamp = "30 min ago"
                    profilePic = "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/03/Pictures/_91ad5416-8d0f-11ea-8bae-d48e751bd032.jpg"
                />
                <Chat
                    name="Hawkeye"
                    message = "played 18, shot 18"
                    timestamp = "1 hour ago"
                    profilePic="https://vignette.wikia.nocookie.net/heroes-and-villain/images/b/b4/Hawkeye_Profile.png/revision/latest?cb=20190615214749"
                />
                <Chat
                    name="Black Panther"
                    message = " I never freeze"
                    timestamp = "1 hour ago"
                    profilePic="https://wallpapercave.com/wp/wp1869876.jpg"
                />
                
            </div>
        )
    }

}


export default Chatpage;