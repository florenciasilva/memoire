import React, { Component } from 'react';
import Firebase from './firebase';
import { Section, Form, Input, Submit} from './style';
import { withRouter } from 'react-router-dom'
import Main from './Main';

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
                <Section>
                    <Form method="post">
                        <label htmlFor="email">Write your email here</label>
                        <Input id="email" type="email" name="email" required onChange={(e) => this.handleChange(e)} />
                        <label htmlFor="password">Write your password here</label>
                        <Input id="password" type="password" name="password" required onChange={(e) => this.handleChange(e)} />
                        <Submit onClick={this.handleSubmit}>Log In</Submit>
                    </Form>
                </Section>
                );
        };
    }





export default withRouter(LogIn);