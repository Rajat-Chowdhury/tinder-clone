import React from 'react';
import { NavLink , useHistory } from 'react-router-dom';


import classes from './Header.module.css';

import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const Header = (props) => {

    const history = useHistory();

    return(
        <div className={classes['header']} >

            
                {props.backButton ? (
                    <IconButton onClick={() => history.replace(props.backButton)} >
                        <ArrowBackIosIcon 
                        fontSize="large"
                        className={classes['header__icon']} />
                    </IconButton>)
                :(
                    <IconButton>
                        <PersonIcon 
                        className={classes['header__icon']}
                        fontSize="large"/>
                    </IconButton>)
            }
                
                
            <NavLink to="/">
                <img  
                className={classes['header__logo']}
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                alt="tinder logo" />
            </NavLink>
            
            
            
            <NavLink to="/chat">
                <IconButton>
                    <ForumIcon 
                    className={classes['header__icon']}
                    fontSize="large"/>
                </IconButton>
            </NavLink>
            
            
        </div>
    );

}


export default Header