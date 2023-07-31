import React from 'react';
import s from './Button.module.css';

const Button = ({ onClick, text, num, isActive = false }) => {
  return (
    <button
      className={isActive ? s.btnActive : s.btn}
      onClick={() => onClick(num)}
    >
      {text}
    </button>
  );
};

export default Button;
