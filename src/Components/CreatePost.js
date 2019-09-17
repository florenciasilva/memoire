import React, { Component } from 'react';
import firebase from 'firebase';
import { TextArea, Submit, Container } from './style';

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
        .then(() => {
            const container = document.getElementById('fade');
            container.classList.toggle('fade-in');
        })
        .catch(err => console.error(err))

    };

    render() {
        return (
            <Container>
                <TextArea name="msg" onChange={e => this.handleChange(e)}>
                </TextArea>
                <Submit onClick={this.handleSubmit}>Send</Submit>
            </Container>
        )
    }
}

export default CreatePost;