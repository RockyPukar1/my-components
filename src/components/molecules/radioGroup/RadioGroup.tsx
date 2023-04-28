import React from 'react';
import Radio from '../../atoms/radio/Radio';

type RadioGroupProps = {
  options: Array<{ value: string, label: string }>;
  selectedValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onChange,
  className
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      {options.map(option => (
        <div key={option.value} className="naxatw-flex naxatw-items-center naxatw-mb-2">
          <Radio
            id={option.value}
            label={option.label}
            checked={option.value === selectedValue}
            onChange={handleRadioChange}
          />
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
