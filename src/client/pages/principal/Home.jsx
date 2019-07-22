import React, { Component, Fragment } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Principal from './Principal';
import Empresa from '../empresa/Empresa';
import Servicios from '../servicios/Servicios';
import Inmuebles from '../inmuebles/Inmuebles';
import Empleados from '../empleados/Empleados';
import NotFound from '../../components/notFound/NotFound';

const handleRender = (location) => {
  const session = JSON.parse(localStorage.getItem('session'));
  switch (location) {
    case '/' || '/inmuebles':
      return <Inmuebles api='/api/estates' />;
    case '/inmuebles/:id':
      return <Inmueble />;
    case '/empresa':
      return <Empresa />;
    case '/servicios':
      return <Servicios />;
    case '/empleados':
      return session.inicied ? <Empleados /> : <NotFound />;
    default:
      return <NotFound />;
  }
};

function Home(props) {
  const toRender = handleRender(props.location.pathname);
  return (
    <Fragment>
      <Navbar login={props.login}>
        <Principal onSession={props.onSession}>{toRender}</Principal>
      </Navbar>
    </Fragment>
  );
}

export default Home;
