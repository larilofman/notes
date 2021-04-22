import React from 'react';
import './style.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: any
}

const Button: React.FC<Props> = ({
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
