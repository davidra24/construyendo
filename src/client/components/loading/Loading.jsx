import React from 'react';

const Loading = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='lds-css ng-scope'>
        <div className='lds-blocks' style={{ width: '100%', height: '100%' }}>
          <div style={{ left: '38px', top: '38px', animationDelay: '0s' }} />
          <div
            style={{ left: '80px', top: '38px', animationDelay: '0.1125s' }}
          />
          <div
            style={{ left: '122px', top: '38px', animationDelay: '0.225s' }}
          />
          <div
            style={{ left: '38px', top: '80px', animationDelay: '0.7875s' }}
          />
          <div
            style={{ left: '122px', top: '80px', animationDelay: '0.3375s' }}
          />
          <div
            style={{ left: '38px', top: '122px', animationDelay: '0.675s' }}
          />
          <div
            style={{ left: '80px', top: '122px', animationDelay: '0.5625s' }}
          />
          <div
            style={{ left: '122px', top: '122px', animationDelay: '0.45s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
