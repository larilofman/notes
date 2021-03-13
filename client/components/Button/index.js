import React from 'react';
import './style.scss';

const Button = ({
  onClick, disabled, children, ...props
}) => (
  <button
    type="submit"
    onClick={onClick}
    className="button"
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);


export default Button;
