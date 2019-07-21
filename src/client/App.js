import React, { Component } from 'react';
import Routes from './routes/Routes.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faHome } from '@fortawesome/free-solid-svg-icons';
library.add(faUserCircle, faHome);

class App extends Component {
  constructor() {
    super();
    this.state = {
      session: { inicied: false, user: null, permits: null },
    };
    localStorage.setItem('session', this.state.session);
  }
  componentDidMount() {}
  handleChangeSesion() {
    this.setState({
      session: localStorage.getItem('session'),
    });
  }
  render() {
    return (
      <Routes
        {...this.props}
        session={this.state.session}
        onSession={this.handleChangeSesion}
      />
    );
  }
}

export default App;
