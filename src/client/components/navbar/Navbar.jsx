import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  if (props.login) {
    return <h1>Hi</h1>;
  }
  if (!props.login) {
    return (
      <Fragment>
        <h1>Construyendo sueños</h1>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to='#'>
            Construyendo sueños
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Imuebles <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/empresa'>
                  Empresa
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/servicios'>
                  Servicios
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contactos'>
                  Contactos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {props.children}
      </Fragment>
    );
  }
}

export default Navbar;
