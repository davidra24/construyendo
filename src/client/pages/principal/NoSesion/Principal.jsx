import React, { Fragment } from 'react';
import Login from '../../login/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Principal(props) {
  return (
    <Fragment>
      <hr />
      <br />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2'>
            <h3>Casas</h3>
            <h3>Campos</h3>
            <h3>Apartamentos</h3>
            <h3>Arriendos</h3>
            <br />
            <FontAwesomeIcon icon='home' size='6x' />
            <br />
            <h3>Construyendo sueños ®</h3>
            <p>Tel. 7711 7631</p>
            <p>Cel. 317 335 8963</p>
          </div>
          <div className='col-7'>{props.children}</div>
          <div className='col-3'>
            <Login />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Principal;
