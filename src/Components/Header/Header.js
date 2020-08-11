import React from 'react';
import classes from './Header.module.css';

import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {


    return(
        <div className={classes['header']} >
            <IconButton>
                <PersonIcon 
                className={classes['header__icon']}
                fontSize="large"/>
            </IconButton>
            
            <img  
            className={classes['header__logo']}
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
            alt="tinder logo" />
            <IconButton>
                <ForumIcon 
                className={classes['header__icon']}
                fontSize="large"/>
            </IconButton>
            
        </div>
    )

}


export default Header