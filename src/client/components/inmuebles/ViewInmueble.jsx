import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CurrencyFormat from 'react-currency-format';
const apikey = 'A4yaj02SoQJeNfxPB2Agmz';

const fillOptions = () => {
  return (
    <Fragment>
      <option value='A'>Arriendo</option>
      <option value='V'>Venta</option>
    </Fragment>
  );
};

const fillProperties = () => {
  return (
    <Fragment>
      <option value='L'>Local</option>
      <option value='C'>Casa</option>
      <option value='A'>Apartamento</option>
    </Fragment>
  );
};

const ViewInmueble = (props) => {
  const inmueble = props.inmueble;
  console.log(props);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <strong>Opción</strong>
          {props.edited ? (
            <select
              name='option'
              value={props.formValues.option}
              type='text'
              displayType={'text'}
              onChange={props.onChange}
              className='form-control'>
              {fillOptions()}
            </select>
          ) : (
            <p>{inmueble.options === 'A' ? 'Arriendo' : 'Venta'}</p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Propiedad</strong>
          {props.edited ? (
            <select
              name='property'
              value={props.formValues.property}
              type='text'
              onChange={props.onChange}
              className='form-control'>
              {fillProperties()}
            </select>
          ) : (
            <p>
              {inmueble.property === 'L'
                ? 'Local'
                : inmueble.property === 'C'
                ? 'Casa'
                : 'Apartamento'}
            </p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Ubicación</strong>
          {props.edited ? (
            <input
              name='location'
              value={props.formValues.location}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{inmueble.location}</p>
          )}
        </div>
        <div className='col-12 col-md-6'>
          <strong>Zona</strong>
          {props.edited ? (
            <input
              name='zone'
              value={props.formValues.zone}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{inmueble.zone}</p>
          )}
        </div>
        <div className='col-12'>
          <strong>Descripción</strong>
          {props.edited ? (
            <textarea
              name='description'
              value={props.formValues.description}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{inmueble.description}</p>
          )}
        </div>
        <div className='col-12'>
          <strong>Precio</strong>{' '}
          {props.edited ? (
            <CurrencyFormat
              thousandSeparator={true}
              prefix={'$'}
              name='price'
              value={props.formValues.price}
              onChange={props.onChange}
              className='form-control'
            />
          ) : (
            <p>{inmueble.price}</p>
          )}
        </div>
        <div className='col-12'>
          <strong>Imágenes</strong>
          <br />
          <br />
          {inmueble.images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className='img-fluid'
                  src={image}
                  alt={`Propiedad ${index}`}
                />
                <br />
                <br />
              </div>
            );
          })}
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

export default ViewInmueble;
