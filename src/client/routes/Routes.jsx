import React, { Component } from 'react';
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom';
import Home from '../pages/principal/Home';

class Routes extends Component {
  state = {
    login: {}
  };
  componentDidMount() {
    this.verifyLogin();
  }
  verifyLogin = () => {
    const login = JSON.parse(localStorage.getItem('session'));
    this.setState({
      login
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            strict
            path='/'
            component={(props) => (
              <Home {...props} onSession={this.props.onSession} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
