import React, { Component } from 'react';
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom';
import Home from '../pages/principal/Home';
import Inmueble from '../pages/inmuebles/Inmueble';
import Empleado from '../pages/empleados/Empleado';

class Routes extends Component {
  state = {
    login: {},
  };
  componentDidMount() {
    this.verifyLogin();
  }
  verifyLogin = () => {
    const login = JSON.parse(localStorage.getItem('session'));
    this.setState({
      login,
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/inmueble/:id'
            component={(props) => (
              <Inmueble
                {...props}
                onSession={this.props.onSession}
                api='/api/estates/'
              />
            )}
          />
          <Route
            exact
            path='/empleado/:id'
            component={(props) => (
              <Empleado
                {...props}
                onSession={this.props.onSession}
                api='/api/users/'
              />
            )}
          />
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
