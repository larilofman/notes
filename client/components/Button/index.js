import React from 'react';
import './style.scss';

const Button = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="button"
  >
    {children}
  </button>
);


export default Button;
