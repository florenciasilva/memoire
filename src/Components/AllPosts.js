import React, { Component } from 'react';
import { SecondaryBtn, PostContainer, GrayBtn, Date, Text, EndToEnd, Favorite, RowContainer } from './style';
import Edit from './EditPost';
import moment from 'moment';
import Swal from 'sweetalert2'
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
    };

    handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this note?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#27e6be',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                    Swal.fire(
                        'Deleted!',
                        'Your note has been deleted.',
                        'success'
                      )
            }
          })
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
        this.setState({ currentEdit: -1})
    }

     handleFavorite = (id) => {
        this.setState({favorite: !this.state.favorite})
    }

    componentDidMount() {
        this.getPosts();
    };

    render(){
        if(this.state.isLoading || this.state.currentUser.email === undefined) {
            return (
                <p aria-live="polite">Loading</p>
            )/*
        } else if (this.state.currentUser.email ) {
            return this.state.msg.map((post, i) => {
                if(post.data().author === this.state.currentUser.email) {
                    return (
                        <PostContainer className="fade" key={i}>
                            <EndToEnd>
                                <Favorite
                                    aria-label={post.data().favorite ? "Unstar" : "Starred"}
                                    tabIndex="0"
                                    className="styled-focus"
                                    onClick={() => this.handleFavorite(post.id)}>
                                        <i className={post.data().favorite ? "fas fa-star" : "far fa-star"}></i>
                                </Favorite>
                            </EndToEnd>
                            <RowContainer>
                                <Text
                                    className="styled-focus"
                                    tabIndex="0"
                                    aria-label={"This note says" + post.data().post + "and was made" + moment(post.data().date).startOf('seconds').fromNow()}
                                    style={{display: (i === this.state.currentEdit) ? "none" : "flex"}}>
                                    {post.data().post}
                                </Text>
                            </RowContainer>
                            <Edit i={i} editStage={this.editStage} state={this.state} id={post.id} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel}/>
                            <Date>{moment(post.data().date).startOf('seconds').fromNow()}</Date>
                            <RowContainer>
                                <GrayBtn onClick={() => this.handleDelete(post.id)}>Delete</GrayBtn>
                                <SecondaryBtn
                                    className="styled-focus"
                                    aria-controls="t1"
                                    aria-expanded="false"
                                    onClick={e => this.handleEdit(e, i, post.data().post)}>Edit</SecondaryBtn>
                            </RowContainer>
                    </PostContainer>
                        );
                    };
                });*/
            };
        };
    };


export default AllPosts;