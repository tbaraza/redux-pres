import React, { Component } from 'react';
import { authUser } from '../redux/modules/auth';
import { increment, decrement } from '../redux/modules/count';
import configureStore from '../redux/store/configureStore';

const store = configureStore();

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            number: 0,
        };
    }

    handleChange = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email.trim();
        const password = this.state.password.trim();
        store.dispatch(authUser({ email, password }));
    }

    handleIncrement = () => {
        const finalNumber = this.state.number + 1;
        this.setState({ number: finalNumber });
        store.dispatch(increment(this.state.number));
    }

    handleDecrement = () => {
        const finalNumber = this.state.number - 1;
        this.setState({ number: finalNumber });
        store.dispatch(decrement(this.state.number));
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                placeholder="Email"
              />
              <input
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                placeholder="Password"
              />
            </form>
            <button onClick={this.handleSubmit}>submit</button>
            <h1>Current state:</h1>
            <h2>{`Email is ${this.state.email} and password is ${this.state.password}`}</h2>
            <div>
              <h1>Current number is: {this.state.number}</h1>
              <button onClick={this.handleIncrement}>Increment</button>
              <button onClick={this.handleDecrement}>Decrement</button>
            </div>
          </div>
        );
    }
}
