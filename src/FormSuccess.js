import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Your account has been created successfully.</h1>
      <img className='form-img-2' src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png' alt='success-image' />
    </div>
  );
};

export default FormSuccess;