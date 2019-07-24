import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function UsuarioItem(props) {
  const usuario = props.usuario;
  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <strong>Apellidos: </strong>
            <p>{usuario.secondName}</p>
          </div>
          <div className='col-12 col-md-4'>
            <strong>Nombres: </strong>
            <p>{usuario.name}</p>
          </div>
          <div className='col-12 col-md-4'>
            <strong>Correo electrónico: </strong>
            <p>{usuario.email}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const ListaEmpleados = (props) => {
  const { usuarios } = props;
  if (props.error) {
    return <h4>Un error ha ocurrido al consultar los datos</h4>;
  }
  return (
    <Fragment>
      <ul className='list-group'>
        {usuarios.map((usuario) => {
          console.log(usuario);
          return (
            <li
              key={usuario._id}
              className='list-group-item'
              style={{ listStyleType: 'none' }}>
              <Link
                to={`/empleado/${usuario._id}`}
                className='text-reset text-decoration-none'>
                <UsuarioItem usuario={usuario} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ListaEmpleados;
