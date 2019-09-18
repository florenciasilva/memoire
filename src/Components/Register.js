import React, { Component } from 'react';
import Firebase from './firebase';
import { Input, Section, Form, Submit, Heading, Register } from './style';
import { withRouter } from 'react-router-dom'


class RegisterUser extends Component {
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
        <main>
            <Heading>Register</Heading>
            <Section>
                <Form method="post">
                    <label htmlFor="email">Write your email here</label>
                    <Input id="email" type="email" name="email" required onChange={(e) => this.handleChange(e)} />
                    <label htmlFor="password">Write your password here</label>
                    <Input id="password" type="password" name="password" required onChange={(e) => this.handleChange(e)} />
                    <Register to="/">Already have an account? Log in here</Register>
                    <Submit onClick={this.handleSubmit}>Register</Submit>
                </Form>
            </Section>
        </main>
        );
    };
};



export default withRouter(RegisterUser);