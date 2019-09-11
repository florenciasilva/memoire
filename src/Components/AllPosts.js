import React, { Component, Fragment } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';

class AllPosts extends Component{
    constructor(){
        super();
        this.state = {
            msg: [],
            isLoading: true
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDelete = (id) => {
        const db = firebase.firestore();
        db.collection("posts").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    getPosts = () => {
        const db = firebase.firestore();
        db.collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
            let allPosts = [];
            querySnapshot.forEach((doc) => {
                allPosts.push(doc);
                this.setState({
                    isLoading: false,
                    msg: allPosts
                });
            });
        });
    };

    componentDidMount() {
        this.getPosts();
    };

    render(){
        //console.log(this.state)
        if(this.state.isLoading) {
            return (
                <p>cargando</p>
            )
        } else {
            return this.state.msg.map((post, i) => {
                return (
                    <article key={i}>
                        <p>{post.data().author}</p>
                        <p>{post.data().post}</p>
                        <p>{post.data().date}</p>
                        <button onClick={() => this.handleDelete(post.id)}>Borrar</button>
                    </article>
                );
            });
        };
    };
};

export default AllPosts;