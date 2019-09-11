import React, { Fragment } from 'react';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import AllPosts from './AllPosts';

const Main = () => (
    <Fragment>
        <Navbar />
        <CreatePost />
        <AllPosts />
    </Fragment>

);


export default Main;