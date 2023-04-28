import React from 'react';

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
};

const Textarea: React.FC<Props> = ({
  id,
  label,
  value,
  onChange,
  rows = 3,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={id} className="naxatw-block naxatw-text-gray-700 naxatw-font-bold naxatw-mb-2">
        {label}
      </label>
      <textarea
        id={id}
        className="naxatw-shadow naxatw-appearance-none naxatw-border naxatw-rounded naxatw-w-full naxatw-py-2 naxatw-px-3 naxatw-text-gray-700 naxatw-leading-tight focus:naxatw-outline-none focus:naxatw-shadow"
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
