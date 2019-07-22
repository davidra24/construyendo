import React, { Component, Fragment } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Principal from '../principal/Principal';
import Loading from '../../components/loading/Loading';
import NotFound from '../../components/notFound/NotFound';
import ViewInmueble from '../../components/inmuebles/ViewInmueble';

class Inmueble extends Component {
  state = {
    loading: true,
    data: [],
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
    const response = await fetch(
      `${this.props.api}${this.props.match.params.id}`
    );
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
  render() {
    return (
      <div>
        <Fragment>
          <Navbar login={this.props.login}>
            <Principal onSession={this.props.onSession}>
              {this.state.loading ? (
                <Loading />
              ) : (
                <ViewInmueble inmueble={this.state.data} />
              )}
            </Principal>
          </Navbar>
        </Fragment>
      </div>
    );
  }
}

export default Inmueble;
