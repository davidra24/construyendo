import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const ViewEmpleado = (props) => {
  const empleado = props.empleado;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <strong>Cédula</strong>
          {props.edited ? (
            <input
              name='document'
              value={props.formValues.document}
              type='text'
              displayType={'text'}
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{empleado.document}</p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Fecha de nacimiento</strong>
          {props.edited ? (
            <DayPickerInput
              name='dateBorn'
              value={props.formValues.dateBorn}
              type='text'
              onDayChange={props.onDayChange}
              inputProps={{
                className: 'form-control',
              }}
            />
          ) : (
            <p>{empleado.dateBorn}</p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Nombres</strong>
          {props.edited ? (
            <input
              name='name'
              value={props.formValues.name}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{empleado.name}</p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Apellidos</strong>
          {props.edited ? (
            <input
              name='secondName'
              value={props.formValues.secondName}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{empleado.secondName}</p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Usuario</strong>
          {props.edited ? (
            <input
              name='user'
              value={props.formValues.user}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{empleado.user}</p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Correo electrónico</strong>
          {props.edited ? (
            <input
              name='email'
              value={props.formValues.email}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{empleado.email}</p>
          )}
        </div>
        <div className='col-12'>
          <strong>Contraseña</strong>
          {props.edited ? (
            <input
              name='password'
              value={props.formValues.password}
              type='password'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>ꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏꞏ</p>
          )}
          <br />
          <br />
        </div>
        {props.inicied ? (
          <Fragment>
            {props.edited ? (
              <button
                className='col-12 btn btn-block btn-success'
                onClick={props.save}>
                <FontAwesomeIcon icon='check' size='3x' />
              </button>
            ) : (
              <button
                className='col-12 btn btn-block btn-success'
                onClick={props.edit}>
                <FontAwesomeIcon icon='edit' size='3x' />
              </button>
            )}
            <button
              className='col-12 btn btn-block btn-danger'
              onClick={props.handleRemove}>
              <FontAwesomeIcon icon='trash' size='3x' />
            </button>
            <br />
            <br />
          </Fragment>
        ) : (
          <br />
        )}
      </div>
    </div>
  );
};

export default ViewEmpleado;
