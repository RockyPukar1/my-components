import React from 'react';

export type Props = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string; // Add optional description property
  error?: string; // Add optional error property
};

const Radio: React.FC<Props> = ({ id, label, checked, onChange, description, error }) => {
  return (
    <div className='naxatw-flex naxatw-items-center'>
      <label htmlFor={id} className="naxatw-inline-flex naxatw-items-center">
        <input
          id={id}
          type="radio"
          className="naxatw-h-5 naxatw-w-5 naxatw-text-gray-600"
          checked={checked}
          onChange={onChange}
        />
        <span className="naxatw-ml-2 naxatw-text-gray-700">{label}</span>
        {description && <span className="naxatw-ml-2 naxatw-text-gray-500">{description}</span>}
      </label>
      {error && <span className="naxatw-text-red-500">{error}</span>}
    </div>
  );
};

export default Radio;
