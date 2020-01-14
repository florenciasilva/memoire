import React, { Component } from 'react';
import Firebase from '../firebase';
import { Input, Section, Form, Submit, Heading, Subtitle, Register, ErrorMessage } from '../Components/style';
import { withRouter } from 'react-router-dom'


class RegisterUser extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            error: null,
            errMsg: '',
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
            .then(res => {
                this.props.history.push('/notes');
                this.setState({error: false})
            })
            .catch(err => this.setState({error: true, errorMsg: err.message}))
    };

    render() {
        return (
            <main>
                <Heading>Register to Memoire</Heading>
                <Subtitle>A private space only for you</Subtitle>
                <Section>
                    <Form method="post">
                        <label htmlFor="email">Write your email here</label>
                        <Input className="styled-focus" id="email" type="email" name="email" required onChange={this.handleChange} />
                        <label htmlFor="password">Write your password here</label>
                        <Input className="styled-focus" id="password" type="password" name="password" required onChange={this.handleChange} />
                        <ErrorMessage style={{display: this.state.error ? 'flex' : 'none' }}>{this.state.errorMsg}</ErrorMessage>
                        <Register className="styled-focus" to="/">Already have an account? Log in here</Register>
                        <Submit className="styled-focus" onClick={this.handleSubmit}>Register</Submit>
                    </Form>
                </Section>
            </main>
        );
    };
};

export default withRouter(RegisterUser);