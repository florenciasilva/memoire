import React, { Component, Fragment } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';

class AllPosts extends Component{
    constructor(){
        super();
        this.state = {
            msg: [],
            isLoading: true,
            hidden: true,
            currentEdit: -1,
            editText: '',
            tabIndex: '-1'
        };
    };


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

    handleEdit = (e, i, post) => {
        e.target['aria-expanded'] = true;
        this.setState({currentEdit: i,
                       editText: post,
                       tabIndex: '0'});
    }

    editStage = (e) => {
        this.setState({editText: e.target.value})
    }

    handleSubmit = (e, id) => {
        const db = firebase.firestore();
        this.setState({ currentEdit: -1})
        return db.collection('posts').doc(id).update({
            post: this.state.editText,
            lastEdit: new Date().toString()
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
    }

    componentDidMount() {
        this.getPosts();
    };

    render(){
        if(this.state.isLoading) {
            return (
                <p>cargando</p>
            )
        } else {
            return this.state.msg.map((post, i) => {
                return (
                    <article key={i}>
                        <p>{post.data().author}</p>
                        <p  style={{display: (i === this.state.currentEdit) ? "none" : "block"}} >{post.data().post}</p>
                        <div style={{display: (i === this.state.currentEdit) ? "block" : "none"}} hidden={this.state.hidden} id="edit-section" role="region" tabIndex={this.state.tabIndex}>
                            <label htmlFor="edit">Editar post</label>
                            <input
                                ref={input => input && input.focus()}
                                type="text"
                                id="edit"
                                value={this.state.editText}
                                onChange={ e => this.editStage(e)} />
                            <button onClick={e => this.handleSubmit(e, post.id)}>Editar</button>
                        </div>
                        <p>{post.data().date}</p>
                        <button onClick={() => this.handleDelete(post.id)}>Borrar</button>
                        <button aria-controls="t1" aria-expanded="false" onClick={e => this.handleEdit(e, i, post.data().post)}>Editar</button>
                    </article>
                );
            });
        };
    };
};


export default AllPosts;