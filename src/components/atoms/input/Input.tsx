import React from 'react';

export type InputType = 'email' | 'password' | 'text';
export type InputProps = {
  id: string;
  label: string;
  type: InputType;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean
};

const Input: React.FC<InputProps> = ({
  className,
  id,
  label,
  type,
  onChange,
  placeholder = "Enter ...",
  required = false
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={`naxatw-border naxatw-border-gray-300 naxatw-rounded naxatw-p-2 ${className}`}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
