import React from 'react';
import Input, { InputType } from '../../atoms/input/Input';
import Button, { ButtonType } from '../../atoms/button/Button';

type TextInputWithButtonProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  buttonText: string;
  buttonType?: ButtonType;
  placeholder?: string;
  className?: string;
  id: string;
  label: string;
  type: InputType
};

const TextInputWithButton: React.FC<TextInputWithButtonProps> = ({
  value,
  onChange,
  onSubmit,
  buttonText,
  buttonType = 'button',
  placeholder,
  className,
  id,
  label,
  type
}) => {
  return (
    <div className={className}>
      <Input
        id={id}
        label={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Button onClick={onSubmit} type={buttonType}>
        {buttonText}
      </Button>
    </div>
  );
};

export default TextInputWithButton;
