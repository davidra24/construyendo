import React, { Component } from 'react';
import { Route, Link, Switch, HashRouter as Router } from 'react-router-dom';
import HomeWSesion from '../pages/principal/Sesion/Home';
import HomeNSesion from '../pages/principal/NoSesion/Home';

function Routes(props) {
  if (props.session.inicied) {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={(props) => (
              <HomeWSesion {...props} onSession={props.onSession} />
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
            component={(props) => (
              <HomeNSesion
                {...props}
                onSession={props.onSession}
                location='root'
              />
            )}
          />
          <Route
            exact
            path='/empresa'
            component={(props) => (
              <HomeNSesion
                {...props}
                onSession={props.onSession}
                location='empresakkñxñdsy'
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
