import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return <input className={`naxatw-border naxatw-border-gray-300 naxatw-rounded naxatw-p-2 ${className}`} {...rest} />;
};

export default Input;
