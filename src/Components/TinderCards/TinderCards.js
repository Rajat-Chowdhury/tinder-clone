import React, { useState } from 'react';

import TinderCard from 'react-tinder-card';
import classes from './TinderCards.module.css';


const TinderCards = () => {

    const [people,setPeople] = useState([
        {
            name: 'Captain America',
            url:'https://timesofindia.indiatimes.com/thumb/msid-71273471,width-1200,height-900,resizemode-4/.jpg'
        },
        {
            name: 'Ironman',
            url:'https://i.pinimg.com/originals/95/e3/86/95e386d823b762b40026785be93b8170.jpg'
        }
    ]);

    // people.push('person1 ' , 'person2')

    //setPeople takes a function and pushes to the array and refreshes on component update same as compnent did update lifecycle
    //setpeople([...people, 'person1',  'person2 '])

 
    return(
        <div>
          <h1>i am a tinder card</h1>
          {people.map(person => (
            <TinderCard
            className={classes['swipe']}
            preventSwipe={['up' , 'down']}
            key={person.name}>
                <div 
                    style={{backgroundImage: `url(${person.url})`}}
                    className={classes['card']}>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
          ))}  
        </div>
    )



}

export default TinderCards;