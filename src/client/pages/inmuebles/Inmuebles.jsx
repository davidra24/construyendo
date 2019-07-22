import React, { Component, Fragment } from 'react';
import ListaInmuebles from '../../components/inmuebles/ListaInmuebles';
import AgregarInmuebles from '../../components/inmuebles/AgregarInmuebles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../../components/loading/Loading';

class Inmuebles extends Component {
  MySwal = withReactContent(Swal);
  state = {
    data: [],
    loading: true,
    error: null,
    session: {},
    form: {
      option: 'A',
      property: 'L',
      location: '',
      zone: '',
      description: '',
      price: '',
      images: []
    }
  };
  clear = () => {
    this.setState({
      option: 'A',
      property: 'L',
      location: '',
      zone: '',
      description: '',
      price: '',
      images: []
    });
  };
  addImages = (data) => {
    this.setState({
      form: {
        ...this.state.form,
        images: data
      }
    });
    console.log(this.state);
  };
  componentDidMount() {
    this.verifySession();
    this.get();
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  verifySession = () => {
    const storage = localStorage.getItem('session');
    this.setState({
      session: JSON.parse(storage)
    });
  };
  get = async () => {
    this.setState({
      loading: true,
      error: null
    });
    const response = await fetch(this.props.api);
    const data = await response.json();
    if (response.status === 200) {
      this.setState({ data, loading: false });
    } else {
      this.setState({ loading: false });
      this.MySwal.fire({
        title: 'Incorrecto',
        text: 'No se ha podido consultar los datos',
        type: 'error'
      });
    }
  };
  save = async (e) => {
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
    this.clear();
    this.get();
    if (response.status === 200) {
      this.MySwal.fire({
        title: 'Correcto',
        text: 'Se ha guardado satisfactoriamente',
        type: 'success'
      });
    } else {
      this.MySwal.fire({
        title: 'Incorrecto',
        text: 'No se ha podido guardar',
        type: 'error'
      });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <Fragment>
        {this.state.session.inicied ? (
          <AgregarInmuebles
            onChange={this.handleChange}
            formValues={this.state.form}
            addImages={this.addImages}
            save={this.save}
          />
        ) : (
          <br />
        )}
        <ListaInmuebles inmuebles={this.state.data} error={this.state.error} />
      </Fragment>
    );
  }
}

export default Inmuebles;
