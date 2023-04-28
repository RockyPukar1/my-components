import React from 'react';
import Switch from '../../atoms/switch/Switch';
import Input, { InputType } from '../../atoms/input/Input';

type ToggleSwitchProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  type: InputType;
  placeholder: string;
  id: string;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, value, onChange, type, id, placeholder }) => {
  const handleToggleChange = (checked: boolean) => {
    onChange(checked);
  };

  return (
    <div className="toggle-switch">
      <Switch checked={value} onChange={handleToggleChange} />
      <Input
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ToggleSwitch;
