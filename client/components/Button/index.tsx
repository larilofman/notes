import React from 'react';
import './style.scss';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  { disabled, children, ...props }) => (
  <button
    type="submit"
    className="button"
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);


export default Button;
