import React, { Component, Fragment } from 'react';
import Navbar from '../../../components/navbar/Navbar';

function Home(props) {
  console.log(props);

  /*switch (props.) {
      case value:
        
        break;
    
      default:
        break;
    }*/
  return (
    <Fragment>
      <Navbar login={true}>
        <h1>Hola mundo</h1>
      </Navbar>
    </Fragment>
  );
}

export default Home;
