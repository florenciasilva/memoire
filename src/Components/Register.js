import React, { Component } from 'react';
import Firebase from './firebase';
import { Input, Section, Form } from './style';
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



export default withRouter(Register);