import React from 'react';
import error from '../../img/error 404.png';

const NotFound = () => {
  return (
    <div>
      <img src={error} className='img-fluid' alt='Responsive image' />
    </div>
  );
};

export default NotFound;
