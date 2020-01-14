import React, { Component } from 'react';
import Firebase from '../firebase';
import { Section, Form, Input, Submit, Heading, Subtitle, Register, ErrorMessage } from '../Components/style';
import { withRouter } from 'react-router-dom'

class LogIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: null,
            errorMsg: ''
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
            .catch(err => {
                console.log(err.message)
                this.setState({errorMsg: err.message, error: true})
            });
    };


    render() {
        return (
            <main>
                <Heading>Log in to Memoire</Heading>
                <Subtitle>A personal note-taking app</Subtitle>
                <Section>
                    <Form method="post">
                        <label htmlFor="email">Write your email here</label>
                        <Input className="styled-focus" id="email" type="email" name="email" required onChange={this.handleChange} />
                        <label htmlFor="password">Write your password here</label>
                        <Input className="styled-focus" id="password" type="password" name="password" required onChange={this.handleChange} />
                        <ErrorMessage style={{display: this.state.error ? 'block' : 'none' }}>{this.state.errorMsg}</ErrorMessage>
                        <Register className="styled-focus" to="/register">Don't have an account yet? Register here</Register>
                        <Submit className="styled-focus" onClick={this.handleSubmit}>Log In</Submit>
                    </Form>
                </Section>
            </main>
        );
    };
}

export default withRouter(LogIn);