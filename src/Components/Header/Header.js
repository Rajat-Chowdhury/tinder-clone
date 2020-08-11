import React from 'react';
import classes from './Header.css';

import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {


    return(
        <div className={classes.header} >
            <PersonIcon/>
            <h2>I am a heaeder</h2>
            <ForumIcon/>
        </div>
    )

}


export default Header