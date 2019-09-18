import React, { Component } from 'react';
import firebase from 'firebase';
import { SecondaryBtn, PostContainer, GrayBtn, Post, Date, Text, EndToEnd, Author } from './style';
import Edit from './EditPost';
import moment from 'moment';
import '../App.css';

class AllPosts extends Component {
    constructor(){
        super();
        this.state = {
            msg: [],
            isLoading: true,
            hidden: true,
            currentEdit: -1,
            editText: '',
            tabIndex: '-1',
            currentUser: '',
            favorite: false
        };
    };


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    getPosts = () => {
        const db = firebase.firestore();
        db.collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
            let allPosts = [];
            querySnapshot.forEach((doc) => {
                allPosts.push(doc);
                this.setState({
                    currentUser: firebase.auth().currentUser,
                    isLoading: false,
                    msg: allPosts,
                });
            });
        });
    };

    handleDelete = (id) => {
        const db = firebase.firestore();
        db.collection("posts").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }

    handleEdit = (e, i, post) => {
        e.target['aria-expanded'] = true;
        this.setState({currentEdit: i,
                       editText: post,
                       tabIndex: '0'});
    }

    editStage = (e) => {
        this.setState({editText: e.target.value})
    }

    handleCancel = () => {
        this.setState({ currentEdit: -1})
    }

    handleSubmit = (e, id) => {
        const db = firebase.firestore();
        this.setState({ currentEdit: -1})
        return db.collection('posts').doc(id).update({
            post: this.state.editText,
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
    }

     handleFavorite = (id) => {
        this.setState({favorite: !this.state.favorite})
        const db = firebase.firestore();
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
        if(this.state.isLoading || this.state.currentUser.email === undefined) {
            return (
                <p>cargando</p>
            )
        } else if (firebase.auth().currentUser.email === this.state.currentUser.email ) {
            return this.state.msg.map((post, i) => {
                if(post.data().author === this.state.currentUser.email) {
                    return (
                        <PostContainer className="fade" key={i}>
                            <EndToEnd>
                                <Author >{post.data().author}</Author>
                                <span onClick={() => this.handleFavorite(post.id)}><i className={post.data().favorite ? "fas fa-star" : "far fa-star"}></i></span>
                            </EndToEnd>
                            <Text
                                tabIndex="0"
                                style={{display: (i === this.state.currentEdit) ? "none" : "flex"}}>
                                {post.data().post}
                            </Text>
                            <Edit i={i} editStage={this.editStage} state={this.state} id={post.id} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel}/>
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
                    };
                });
            };
        };
    };


export default AllPosts;