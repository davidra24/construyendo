import React, { Component } from 'react';

class Session extends Component {
  state = {
    session: JSON.parse(localStorage.getItem('session'))
  };
  getSession = () => {
    this.setState({ session: JSON.parse(localStorage.getItem('session')) });
  };
  componentDidMount() {
    this.getSession();
  }
  logout = () => {
    localStorage.setItem('session', JSON.stringify({ inicied: false }));
    this.props.onSession();
  };
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <h2>Bienvenido {this.state.session.user.name}</h2>
            <button className='btn btn-block btn-danger' onClick={this.logout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
