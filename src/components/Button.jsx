import React from 'react';
import '../assets/Button.css';

const Button = (props) => {
  const { children, variant = 'text', color = 'primary', size = 'md', onClick, className } = props;

  return(
    <button type="button" className={`btn ${variant} ${color} ${size} ${className ? className : ''}`} onClick={onClick}>{children}</button>
  )
}

export default Button;