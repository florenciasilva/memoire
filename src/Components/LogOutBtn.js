import React from 'react';
import firebase from '../firebase';
import { GrayBtn, Links } from './style';
import { withRouter } from 'react-router-dom';

const LogOut = (props) => (
    <GrayBtn onClick={() => {
        firebase.auth().signOut()
          .then(res => {
            alert('logged out');
            props.history.push('/')
        })
          .catch(err => console.error(err));
    }}>
        <Links tabIndex="-1" to="/">Sign Out</Links>
    </GrayBtn>
);



export default withRouter(LogOut);