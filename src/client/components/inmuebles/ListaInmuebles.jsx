import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ImuebleItem = (inmueble) => {
  console.log(inmueble);
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <strong>Opción: </strong>
            <p>{inmueble.option === 'A' ? 'Arriendo' : 'Venta'}</p>
          </div>
          <div className='col-12 col-md-4'>
            <strong>Propiedad: </strong>
            <p>
              {inmueble.property === 'L'
                ? 'Local'
                : inmueble.property === 'C'
                ? 'Casa'
                : 'Apartamento'}
            </p>
          </div>
          <div className='col-12 col-md-4'>
            <strong>Precio: </strong> <p>{inmueble.price}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const ListaInmuebles = (props) => {
  console.log(props);

  if (props.error) {
    return <h4>Un error ha ocurrido al consultar los datos</h4>;
  }
  return (
    <Fragment>
      <ul className='list-group'>
        {props.inmuebles.map((inmueble) => {
          return (
            <li
              key={inmueble._id}
              className='list-group-item'
              style={{ listStyleType: 'none' }}>
              <Link
                to={`/inmueble/${inmueble._id}`}
                className='text-reset text-decoration-none'>
                <ImuebleItem inmueble={inmueble} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ListaInmuebles;
