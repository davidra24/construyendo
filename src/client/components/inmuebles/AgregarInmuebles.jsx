import React, { Fragment } from 'react';
import ReactFilepicker from 'react-filepicker';
import CurrencyFormat from 'react-currency-format';

const apikey = 'A4yaj02SoQJeNfxPB2Agmz';
var pr;

const customOptions = {
  buttonText: 'Subir imágenes',
  buttonClass: 'btn btn-info btn-block',
  multiple: true,
  mimetype: 'image/*'
};
const callback = (fpfiles) => {
  var array = [];
  fpfiles.map((file) => {
    const url = file.url.toString();
    array.push(url);
  });
  pr.addImages(array);
};
const fillOptions = () => {
  return (
    <Fragment>
      <option value='V'>Venta</option>
      <option value='A'>Arriendo</option>
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

const AgregarInmuebles = (props) => {
  pr = props;
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Opción</label>
            <select
              name='option'
              value={props.formValues.option}
              type='text'
              displayType={'text'}
              onChange={props.onChange}
              className='form-control'
            >
              {fillOptions()}
            </select>
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Propiedad</label>
            <select
              name='property'
              value={props.formValues.property}
              type='text'
              onChange={props.onChange}
              className='form-control'
            >
              {fillProperties()}
            </select>
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Ubicación</label>
            <input
              name='location'
              value={props.formValues.location}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12 col-md-6'>
            <label htmlFor=''>Zona</label>
            <input
              name='zone'
              value={props.formValues.zone}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12'>
            <label htmlFor=''>Descripción</label>
            <textarea
              name='description'
              value={props.formValues.description}
              type='text'
              onChange={props.onChange}
              className='form-control'
            />
            <br />
          </div>
          <div className='col-12'>
            <label htmlFor=''>Precio</label>
            <CurrencyFormat
              thousandSeparator={true}
              prefix={'$'}
              name='price'
              value={props.formValues.price}
              onChange={props.onChange}
              className='form-control'
            />
          </div>
          <div className='col-12'>
            <label htmlFor=''>
              Imágenes {`(${props.formValues.images.length})`}
            </label>
            <ReactFilepicker
              apikey={apikey}
              mode='pickMultiple'
              onSuccess={callback}
              options={customOptions}
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

export default AgregarInmuebles;
