import React, { Component, Fragment } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Principal from '../principal/Principal';
import Loading from '../../components/loading/Loading';
import ViewEmpleado from '../../components/empleados/ViewEmpleado';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import NotFound from '../../components/notFound/NotFound';
const regEx = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-zA-Z]{2,7}(.[a-zA-Z]{2})?$/;

class Empleado extends Component {
  MySwal = withReactContent(Swal);
  state = {
    edited: false,
    loading: true,
    data: [],
    error: null,
    session: {},
    form: {
      document: '',
      name: '',
      secondName: '',
      dateBorn: '',
      email: '',
      user: '',
      password: '',
    },
  };
  componentDidMount() {
    this.verifySession();
    this.get();
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  verifySession = () => {
    const storage = localStorage.getItem('session');
    this.setState({
      session: JSON.parse(storage),
    });
  };
  remove = async (id) => {
    this.setState({
      loading: true,
    });
    await fetch(`${this.props.api}${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.status === 200) {
          this.MySwal.fire({
            type: 'success',
            title: 'Se ha eliminado el dato satsfactoriamente',
          });
          this.setState({ loading: false });
          this.props.history.push('/');
        } else {
          this.MySwal.fire({
            type: 'error',
            title: 'Error',
            text: 'No se ha podido eliminar el dato',
            showConfirmButton: false,
            timer: 1500,
          });
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        this.MySwal.fire({
          type: 'error',
          position: 'top-end',
          title: 'Oops...',
          text: 'No se ha podido eliminar el dato seleccionado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.setState({ loading: false });
      });
  };
  handleRemove = (e, data) => {
    this.MySwal.fire({
      title: '¿Está seguro?',
      text: '¿Está seguro que desea eliminar este dato?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.remove(data._id);
      }
    });
  };
  handleEdit = () => {
    this.setState({
      edited: !this.state.edited,
    });
  };
  save = async (data) => {
    if (!regEx.exec(this.state.form.email)) {
      this.MySwal.fire({
        title: 'Incorrecto',
        text:
          'No se ha podido guardar, revise el formato de correo electrónico',
        type: 'error',
      });
    } else {
      this.handleEdit();
      this.setState({
        loading: true,
        error: null,
      });
      const response = await fetch(
        `${this.props.api}${this.props.match.params.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(this.state.form),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      this.get();
      if (response.status === 200) {
        this.MySwal.fire({
          title: 'Correcto',
          text: 'Se ha guardado satisfactoriamente',
          type: 'success',
        });
      } else {
        this.MySwal.fire({
          title: 'Incorrecto',
          text: 'No se ha podido guardar',
          type: 'error',
        });
      }
    }
  };
  get = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    const response = await fetch(
      `${this.props.api}${this.props.match.params.id}`,
    );
    const data = await response.json();
    if (response.status === 200) {
      this.setState({ data, loading: false, form: data[0] });
    } else {
      this.setState({ loading: false });
      this.MySwal.fire({
        title: 'Incorrecto',
        text: 'No se ha podido consultar los datos',
        type: 'error',
      });
    }
  };
  handleDayChange = (day) => {
    this.setState({
      form: {
        ...this.state.form,
        dateBorn: day,
      },
    });
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <Fragment>
          <Navbar login={this.props.login}>
            <Principal onSession={this.props.onSession}>
              {this.state.session.inicied ? (
                this.state.loading ? (
                  <Loading />
                ) : (
                  <ViewEmpleado
                    inicied={this.state.session.inicied}
                    empleado={this.state.form}
                    handleRemove={(e) =>
                      this.handleRemove(e, this.state.data[0])
                    }
                    edited={this.state.edited}
                    edit={this.handleEdit}
                    save={(e) => this.save(e, this.state.form)}
                    onChange={this.handleChange}
                    onDayChange={this.handleDayChange}
                    formValues={this.state.form}
                    session={this.state.session}
                  />
                )
              ) : (
                <NotFound />
              )}
            </Principal>
          </Navbar>
        </Fragment>
      </div>
    );
  }
}

export default Empleado;
