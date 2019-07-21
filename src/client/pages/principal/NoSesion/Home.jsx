import React, { Component, Fragment } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Principal from './Principal';

const render = (props) => {
  switch (props.location) {
    case 'root':
      <h1>Hola mundo</h1>;
      break;
    default:
      break;
  }
};

function Home(props) {
  return (
    <Fragment>
      <Navbar login={false}>
        <Principal>{render(props)}</Principal>
      </Navbar>
    </Fragment>
  );
}

export default Home;
