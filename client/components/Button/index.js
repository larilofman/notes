import React from 'react';
import './style.scss';

const Button = ({ onClick, disabled, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="button"
    disabled={disabled}
  >
    {children}
  </button>
);


export default Button;
