import React from 'react';
import Checkbox from '../../atoms/checkbox/Checkbox';

type CheckboxWithLabelProps = {
  label: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={className}>
      <label className="naxatw-flex naxatw-items-center">
        <Checkbox checked={checked} onChange={onChange} label={label} disabled={disabled} />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
