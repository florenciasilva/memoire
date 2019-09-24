import React, { Component } from 'react';
import Firebase from '../firebase';
import { Section, Form, Input, Submit, Heading, Register } from './style';
import { withRouter } from 'react-router-dom'

class LogIn extends Component {
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
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                this.setState({isLoggedIn: !this.state.isLoggedIn});
                this.props.history.push('/notes')
            })
            .catch(err => console.log(err))
    };


    render() {
            return (
                <main>
                    <Heading>Log in to Lab Notes</Heading>
                    <Section>
                        <Form method="post">
                            <label htmlFor="email">Write your email here</label>
                            <Input className="styled-focus" id="email" type="email" name="email" required onChange={this.handleChange} />
                            <label htmlFor="password">Write your password here</label>
                            <Input className="styled-focus" id="password" type="password" name="password" required onChange={this.handleChange} />
                            <Register className="styled-focus" to="/register">Don't have an account yet? Register here</Register>
                            <Submit className="styled-focus" onClick={this.handleSubmit}>Log In</Submit>
                        </Form>
                    </Section>
                </main>
                );
        };
    }





export default withRouter(LogIn);