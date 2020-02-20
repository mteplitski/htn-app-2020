import { Component } from 'react';

export default class AuthProvider extends Component {
  constructor() {
    super();
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.state = {
      loggedIn: localStorage.getItem('rememberMe') || false
    }
  }

  handleLogIn(){
    this.setState({loggedIn: true});
  }

  handleLogOut(){
    localStorage.setItem('rememberMe', false);
    this.setState({loggedIn: false});
  }

  render(){
    const { loggedIn } = this.state;
    const renderProps = {
      loggedIn,
      handleLogOut: this.handleLogOut,
      handleLogIn: this.handleLogIn
    };
    return this.props.render(renderProps);
  }

}