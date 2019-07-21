import React, { Component, Fragment } from 'react';
import ListaInmuebles from '../../components/inmueble/ListaInmuebles';

class Inmuebles extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    session: {}
  };
  componentDidMount() {
    this.verifySession();
  }
  verifySession = () => {
    const storage = localStorage.getItem('session');
    this.setState({
      session: JSON.parse(storage)
    });
  };
  render() {
    return (
      <Fragment>
        {this.state.session.inicied ? <h1>Hola mundo</h1> : <br />}
        <ListaInmuebles />
      </Fragment>
    );
  }
}

export default Inmuebles;
