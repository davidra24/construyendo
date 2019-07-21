import React, { Component, Fragment } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Principal from './Principal';


const handleRender = location => {
  switch (location) {
    case '/':
      return <h1>Hola mundo</h1>;
    case '/empresa':
      return <h1>Hola empresa</h1>;
    default:
      break;
  }
};

function Home(props) {
  console.log(props);
  const toRender = handleRender(props.location.pathname);
  return (
    <Fragment>
      <Navbar login={false}>
        <Principal>{toRender}</Principal>
      </Navbar>
    </Fragment>
  );
}

export default Home;
