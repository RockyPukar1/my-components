import React from 'react';

type Option = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: Option[];
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder,
  disabled = false,
  onChange,
  className = '',
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`naxatw-block naxatw-w-full naxatw-rounded-md naxatw-border-gray-300 naxatw-shadow-sm focus:naxatw-border-indigo-500 focus:naxatw-ring-0 focus:naxatw-ring-indigo-200 focus:naxatw-ring-opacity-50 ${className}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
