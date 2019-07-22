import React, { Component } from 'react';
import AgregarEmpleados from '../../components/empleados/AgregarEmpleados';
import ListaEmpleados from '../../components/empleados/ListaEmpleados';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../../components/loading/Loading';
const regEx = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+.[a-zA-Z]{2,7}(.[a-zA-Z]{2})?$/;

class Empleados extends Component {
  MySwal = withReactContent(Swal);
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
  }
  state = {
    data: [],
    error: null,
    loading: true,
    form: {
      document: '',
      name: '',
      secondName: '',
      dateBorn: '',
      email: '',
      user: '',
      password: ''
    }
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleDayChange = (day) => {
    this.setState({
      form: {
        ...this.state.form,
        dateBorn: day
      }
    });
  };
  componentDidMount() {
    this.get();
  }
  clear = () => {
    this.setState({
      form: {
        document: '',
        name: '',
        secondName: '',
        dateBorn: '',
        email: '',
        user: '',
        password: ''
      }
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
    if (!regEx.exec(this.state.form.email)) {
      this.MySwal.fire({
        title: 'Incorrecto',
        text:
          'No se ha podido guardar, revise el formato de correo electrónico',
        type: 'error'
      });
    } else {
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
      await this.clear();
      await this.get();
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
    }
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div>
        <AgregarEmpleados
          formValues={this.state.form}
          onChange={this.handleChange}
          onDayChange={this.handleDayChange}
          save={this.save}
        />
        <ListaEmpleados usuarios={this.state.data} />
      </div>
    );
  }
}

export default Empleados;
