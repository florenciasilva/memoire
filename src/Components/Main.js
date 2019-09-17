import React, { Fragment } from 'react';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import AllPosts from './AllPosts';
import { Wrapper } from './style';

const Main = () => (
    <Fragment>
        <Navbar />
        <CreatePost />
        <Wrapper>
            <AllPosts />
        </Wrapper>
    </Fragment>

);


export default Main;