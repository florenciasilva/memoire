import React, { Component } from 'react';
import firebase from 'firebase';
import { SecondaryBtn, PostContainer, Submit, GrayBtn, Post, Date, Text, EndToEnd, Author } from './style';
import moment from 'moment';
import '../App.css';
class AllPosts extends Component{
    constructor(){
        super();
        this.state = {
            msg: [],
            isLoading: true,
            hidden: true,
            currentEdit: -1,
            editText: '',
            tabIndex: '-1',
            favorite: false,
            star: 'far fa-start',
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
            //lastEdit: new Date().toString(),
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
    }

    handleFavorite = (id) => {
        const db = firebase.firestore();
        this.setState({ favorite: !this.state.favorite})
        db.collection('posts').doc(id).update({
            favorite: this.state.favorite
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
                    <PostContainer id="fade" key={i}>
                        <EndToEnd>
                                <Author >{post.data().author}</Author>
                                <span onClick={() => this.handleFavorite(post.id)}><i className={post.data().favorite ? "fas fa-star" : "far fa-start"}></i></span>
                        </EndToEnd>
                        <Text className="transcript" style={{display: (i === this.state.currentEdit) ? "none" : "block"}} >{post.data().post}</Text>
                        <div style={{display: (i === this.state.currentEdit) ? "block" : "none"}}
                            hidden={this.state.hidden}
                            id="edit-section"
                            role="region"
                            tabIndex={this.state.tabIndex}>
                            <label htmlFor="edit">Editar post</label>
                            <textarea
                                ref={input => input && input.focus()}
                                id="edit"
                                value={this.state.editText}
                                onChange={ e => this.editStage(e)} />
                            <Submit onClick={e => this.handleSubmit(e, post.id)}>Editar</Submit>
                        </div>
                        <Date>{moment(post.data().date).startOf('seconds').fromNow()}</Date>
                        <Post>
                            <GrayBtn onClick={() => this.handleDelete(post.id)}>Borrar</GrayBtn>
                            <SecondaryBtn
                                aria-controls="t1"
                                aria-expanded="false"
                                onClick={e => this.handleEdit(e, i, post.data().post)}>Editar</SecondaryBtn>
                        </Post>
                    </PostContainer>
                );
            });
        };
    };
};


export default AllPosts;