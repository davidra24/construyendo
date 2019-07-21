import React, { Component } from 'react';

class Session extends Component {
  state = {
    session: {}
  };
  getSession = () => {
    this.setState({ session: JSON.parse(localStorage.getItem('session')) });
  };
  componentDidMount() {
    this.getSession();
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <h2>Bienvenido {this.state.session.user}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
