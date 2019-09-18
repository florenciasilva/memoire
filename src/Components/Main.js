import React, { Fragment } from 'react';
import Navbar from './Navbar';
import CreatePost from './CreatePost';
import AllPosts from './AllPosts';
import { Wrapper, Heading } from './style';

const Main = () => (
    <Fragment>
        <Navbar />
        <main>
            <Heading>Lab Notes</Heading>
            <CreatePost />
            <Wrapper>
                <AllPosts />
            </Wrapper>
        </main>
    </Fragment>

);


export default Main;