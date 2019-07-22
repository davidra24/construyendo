import React from 'react';

const ViewInmueble = (props) => {
  const inmueble = props.inmueble[0];
  console.log(inmueble);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <strong>Opción</strong>{' '}
          <p>{inmueble.options === 'A' ? 'Arriendo' : 'Venta'}</p>
        </div>
        <div className='col-12 col-md-6'>
          <strong>Propiedad</strong>{' '}
          <p>
            {inmueble.property === 'L'
              ? 'Local'
              : inmueble.property === 'C'
              ? 'Casa'
              : 'Apartamento'}
          </p>
        </div>
        <div className='col-12 col-md-6'>
          <strong>Ubicación</strong> <p>{inmueble.location}</p>
        </div>
        <div className='col-12 col-md-6'>
          <strong>Zona</strong> <p>{inmueble.zone}</p>
        </div>
        <div className='col-12'>
          <strong>Descripción</strong> <p>{inmueble.description}</p>
        </div>
        <div className='col-12'>
          <strong>Precio</strong> <p>{inmueble.price}</p>
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
      </div>
    </div>
  );
};

export default ViewInmueble;
