import React from 'react';
import firebase from './firebase';
import { GrayBtn, Links } from './style';

const LogOut = () => (
    <GrayBtn onClick={() => {
        firebase.auth().signOut()
          .then(res => alert('Succesfully signed out'))
          .catch(err => console.error(err));
    }}>
        <Links tabIndex="-1" to="/">Sign Out</Links>
    </GrayBtn>
);



export default LogOut;