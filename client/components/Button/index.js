import React from 'react';
import './style.scss';

const Button = ({ onClick, disabled, children }) => (
  <button
    type="submit"
    onClick={onClick}
    className="button"
    disabled={disabled}
  >
    {children}
  </button>
);


export default Button;
