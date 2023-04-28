import React from 'react';
import Input, { InputProps } from '../../atoms/input/Input';

type InputWithLabelProps = InputProps & {
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  id,
  type,
}) => {
  return (
    <div className={className}>
      <label className="naxatw-block naxatw-mb-1">{label}</label>
      <Input
        id={id}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithLabel;
