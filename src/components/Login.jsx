import React, { Component } from 'react';
import { Card, Button, Form} from 'react-bootstrap';

export default class Login extends Component {
    render() {
      return (
        <Card>
            <h1>Welcome to the Hack the North 2020 volunteer portal!</h1>
            <Form>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="coolemail@email.com"></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                  <Form.Check 
                    type="checkbox" 
                    label="Remember Me"
                    // when this is checked, updates the rememberMe variable in local storage to be 
                    // true if checked, and false if unchecked
                    onChange={(event) => {
                        const rememberMe = event.target.value === 'on';
                        localStorage.setItem('rememberMe', rememberMe);
                    }}
                  />
                </Form.Group>

                <Button
                  onClick={this.props.onLogIn}
                >
                  Log In
                </Button>
            </Form>
        </Card>
      )
    }
}