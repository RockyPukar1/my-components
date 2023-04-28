import React from 'react';

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="toggle-switch__wrapper">
      <label className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch__input"
          checked={checked}
          onChange={handleInputChange}
        />
        <span className="toggle-switch__slider" />
      </label>
    </div>
  );
};

export default Switch;
