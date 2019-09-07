import React, { Component } from 'react';
import Firebase from './firebase';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        };
    };

     handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

     handleSubmit = (e) => {
        e.preventDefault(e);
        Firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => this.props.history.push('/notes'))
        .catch(err => console.log(err))
    };

    render() {
    return (
        <Section>
            <Form method="post">
                <label htmlFor="email">Write your email here</label>
                <Input id="email" type="email" name="email" required onChange={(e) => this.handleChange(e)} />
                <label htmlFor="password">Write your password here</label>
                <Input id="password" type="password" name="password" required onChange={(e) => this.handleChange(e)} />
                <button onClick={this.handleSubmit}>Log In</button>
            </Form>
        </Section>
        );
    };
};

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

`

const Input = styled.input`
    margin: 1rem 0 1rem 0;
    padding: .4rem;
    border: none;
    border-bottom: .1rem solid #27e6be;
    border-radius: 7px;

     :focus {
         outline: none;
        border: .2rem solid #27e6be;
        border-radius: 7px;
    }
`


export default withRouter(Register);