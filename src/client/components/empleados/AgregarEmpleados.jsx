import React, { Fragment } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const AgregarEmpleados = (props) => {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Cédula</label>
            <input
              name='document'
              value={props.formValues.document}
              type='number'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Fecha de nacimiento</label>
            <DayPickerInput
              name='dateBorn'
              value={props.formValues.dateBorn}
              type='text'
              onDayChange={props.onDayChange}
              inputProps={{
                className: 'form-control'
              }}
            />
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Nombres</label>
            <input
              name='name'
              value={props.formValues.name}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Apellidos</label>
            <input
              name='secondName'
              value={props.formValues.secondName}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Usuario</label>
            <input
              name='user'
              value={props.formValues.user}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Correo electrónico</label>
            <input
              name='email'
              value={props.formValues.email}
              type='email'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12'>
            <label htmlFor=''>Contraseña</label>
            <input
              name='password'
              value={props.formValues.password}
              type='password'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12'>
            <br />
            <button onClick={props.save} className='btn btn-block btn-success'>
              Guardar
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AgregarEmpleados;
