import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, FormControl, Table } from 'react-bootstrap';
import { signUp } from '../redux/modules/auth';
import { increment, decrement } from '../redux/modules/count';
import configureStore from '../redux/store/configureStore';
import StarshipTable from './Table';
import styles from './signUp.scss';

const store = configureStore;

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
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email.trim();
        const password = this.state.password.trim();
        store.dispatch(signUp(email, password));
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
        const { state } = this.props;
        const starships = state.auth.data.results || [];
        return (
          <div className={styles.body}>
            <Form className={styles.form} onSubmit={this.handleSubmit}>
              <FormGroup bsSize="small" controlId="email">
                <Col sm={2}>Email</Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                </Col>
              </FormGroup>

              <FormGroup bsSize="small" controlId="password">
                <Col sm={2}>Password</Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" onClick={this.handleSubmit}>submit</Button>
                </Col>
              </FormGroup>
            </Form>
            <br />
            <div className={styles.data}>
              <h1>Current state:</h1>
              <h2>{`Email is ${this.state.email} and password is ${this.state.password}`}</h2>
              <h1>Current number is: {this.state.number}</h1>
              <Button onClick={this.handleIncrement}>Increment</Button>
              <Button onClick={this.handleDecrement}>Decrement</Button>
            </div>
            <div className={styles.table}>
              <Table >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>No. of passengers</th>
                    <th>No. of crew</th>
                  </tr>
                </thead>
                <tbody>
                  {starships.map(starship => <StarshipTable starship={starship} />)}
                </tbody>
              </Table>
            </div>
          </div>
        );
    }
}
