import React, { useState, useEffect } from 'react';

import TinderCard from 'react-tinder-card';
import classes from './TinderCards.module.css';
import database from '../../firebase';


const TinderCards = () => {

    const [people,setPeople] = useState([
        // {
        //     name: 'Captain America',
        //     url:'https://timesofindia.indiatimes.com/thumb/msid-71273471,width-1200,height-900,resizemode-4/.jpg'
        // },
        // {
        //     name: 'Ironman',
        //     url:'https://i.pinimg.com/originals/95/e3/86/95e386d823b762b40026785be93b8170.jpg'
        // }
    ]);

    //use effect is a piece of code that runs on a condition
    // this takes 2 args 
    //first one is a function and the second is a condtion
    // leaving the 2nd arg will make it run once when component loads 
    useEffect(() => {

        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()));
        })
        return () => {
            //this is a cleanup function called as return

            //unsubscribe is actually a function returned by snapshot  to be fired upon cleanup of change in people here
            unsubscribe();
        }


    }, []);

    // people.push('person1 ' , 'person2')

    //setPeople takes a function and pushes to the array and refreshes on component update same as compnent did update lifecycle
    //setpeople([...people, 'person1',  'person2 '])

 
    return(
        <div>
  
          <div className={classes['tinderCards__cardContainer']}>
          {people.map(person => (
            <TinderCard
            className={classes['swipe']}
            preventSwipe={['up' , 'down']}
            key={person.url}>
                <div 
                    style={{backgroundImage: `url(${person.url})` , display: 'flex', backgroundPosition:'center top' }}
                    className={classes['card']}>
                    <h3>{person.name}</h3>
                    
                </div>
            </TinderCard>
          ))}

          </div>
           
        </div>
    )



}

export default TinderCards;