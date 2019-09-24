import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar';
import CreatePost from '../Components/CreatePost';
import AllPosts from '../Components/AllPosts';
import { Wrapper, Heading } from '../Components/style';

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