import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../../components/loading/Loading';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class Login extends Component {
  MySwal = withReactContent(Swal);
  constructor(props) {
    super(props);
    this.state = {
      form: {
        user: '',
        password: ''
      },
      loading: false,
      error: null,
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
  clear = () => {
    this.setState({
      form: {
        user: '',
        password: ''
      }
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      session: { inicied: true, user: this.state.user }
    });
    this.setState({
      loading: true,
      error: null
    });
    const response = await fetch(this.props.api, {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    this.clear();
    console.log(response);
    console.log(data);

    if (data != [] && data.length != 0) {
      this.setState({
        session: { inicied: true, user: data[0] }
      });
      this.handleLogin();
      this.props.onSession();
    } else {
      this.setState({
        loading: false
      });
      this.MySwal.fire({
        title: 'Incorrecto',
        text: 'Datos de inicio de sesión incorrectos',
        type: 'error'
      });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
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
              <input
                className='form-control'
                name='user'
                type='text'
                value={this.state.form.user}
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor=''>Contraseña: </label>
              <input
                className='form-control'
                name='password'
                type='password'
                value={this.state.form.password}
                onChange={this.handleChange}
              />
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
