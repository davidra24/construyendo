import React, { Component } from 'react';
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom';
import HomeWSesion from '../pages/principal/Sesion/Home';
import HomeNSesion from '../pages/principal/NoSesion/Home';

class Routes extends Component {

  render(){
  if (this.props.session.inicied) {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={props => (
              <HomeWSesion {...props} onSession={this.props.onSession} />
            )}
          />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={props => (
              <HomeNSesion
                {...props}
                onSession={this.props.onSession}
              />
            )}
          />
          <Route
            exact
            path='/empresa'
            component={props => (
              <HomeNSesion
                {...props}
                onSession={this.props.onSession}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }}
}

export default Routes;
