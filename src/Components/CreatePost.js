import React, { Component, Fragment } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';


class CreatePost extends Component{
    constructor(){
        super();
        this.state = {
            msg: '',
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        const db = firebase.firestore();
        db.collection('posts').add({
            author: firebase.auth().currentUser.email,
            post: this.state.msg,
            date: new Date().toString(),
            lastEdit: null,
            favorite: false
        })
        .then(res => console.log('res'))
        .catch(err => console.error(err))
    };

    render() {
        return (
            <section>
                <textarea name="msg" onChange={e => this.handleChange(e)}>
                </textarea>
                <button onClick={this.handleSubmit}>Send</button>
            </section>
        )
    }
}

export default CreatePost;