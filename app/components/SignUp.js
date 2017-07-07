import React, { Component } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import { authUser } from '../redux/modules/auth';
import configureStore from '../redux/store/configureStore';

const store = configureStore();

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (e) => {
        const newState = {};
        console.log('id', e);
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        console.log("new", newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email.trim();
        const password = this.state.password.trim();
        store.dispatch(authUser({email, password}));
    }

    render() {
      console.log('state props', this.props.state);
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  type="text"
                  placeholder="Password"
                />
            </form>
            <button onClick={this.handleSubmit}>submit</button>
            {/*<h1>Current state is {this.props.state.auth.email + ' and ' + this.props.state.auth.password}</h1>*/}
          </div>
        );
    }
}
