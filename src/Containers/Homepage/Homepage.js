import React, { Component, Fragment } from 'react';


import TinderCards from '../../Components/TinderCards/TinderCards';
import SwipeButtons from '../../Components/SwipeButtons/SwipeButtons';
class Homepage extends Component {
    render(){
        return(
            <Fragment>
                <TinderCards />
                <SwipeButtons />
            </Fragment>
                
            
        )
    }

}

export default Homepage;


