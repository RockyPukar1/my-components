import React from 'react';
import Input, { InputProps } from '../../atoms/input/Input';

type FormInputProps = InputProps & {
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  id,
  type,
  onChange
}) => {
  return (
    <div>
      <Input label={label} id={id} type={type} onChange={onChange} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default FormInput;
