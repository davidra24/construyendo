import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: ''
      },
      session: { inicied: true, user: 'usuario' }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLogin = (e) => {
    localStorage.setItem('session', JSON.stringify(this.state.session));
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      session: { inicied: true, user: this.state.username }
    });
    this.handleLogin();
    this.props.onSession();
  };
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <h1>Iniciar sesión</h1>
            <br />
            <FontAwesomeIcon icon='user-circle' size='3x' />
            <br />
            <form className='form-group' onSubmit={this.handleSubmit}>
              <label htmlFor=''>Usuario: </label>
              <input className='form-control' name='username' type='text' />
              <br />
              <label htmlFor=''>Contraseña: </label>
              <input className='form-control' name='password' type='password' />
              <br />
              <button className='btn btn-block btn-success'>
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
