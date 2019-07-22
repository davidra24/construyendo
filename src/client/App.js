import React, { Component, useEffect } from 'react';
import Routes from './routes/Routes.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import './loading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faHome } from '@fortawesome/free-solid-svg-icons';
library.add(faUserCircle, faHome);

class App extends Component {
  constructor() {
    super();
    this.state = {
      session: { inicied: false, user: null },
    };
    localStorage.setItem('session', JSON.stringify(this.state.session));
  }
  componentDidMount() {
    localStorage.setItem('session', JSON.stringify(this.state.session));
  }
  handleChangeSesion = () => {
    this.setState({
      session: JSON.parse(localStorage.getItem('session')),
    });
  };
  render() {
    return (
      <Routes
        session={this.state.session}
        onSession={this.handleChangeSesion}
      />
    );
  }
}

export default App;
