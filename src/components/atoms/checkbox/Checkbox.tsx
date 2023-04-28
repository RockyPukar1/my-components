import React, { FC } from 'react';

type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const Checkbox: FC<Props> = ({ label, checked, onChange, disabled = false }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="naxatw-inline-flex naxatw-items-center naxatw-cursor-pointer">
      <input
        type="checkbox"
        className="naxatw-h-5 naxatw-w-5 naxatw-text-blue-600"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="naxatw-ml-2 naxatw-text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
