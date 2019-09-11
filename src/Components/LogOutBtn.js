import React from 'react';
import firebase from './firebase';
import { Link } from 'react-router-dom';

const LogOut = () => (
    <button onClick={() => {
        firebase.auth().signOut()
          .then(res => alert('Succesfully signed out'))
          .catch(err => console.error(err));
    }}>
        <Link to="/">Sign Out</Link>
    </button>
);

export default LogOut;