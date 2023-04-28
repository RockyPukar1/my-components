import React from 'react';
import TextArea from '../../atoms/textarea/Textarea';

type TextAreaWithLabelProps = {
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  id: string
}

const TextAreaWithLabel: React.FC<TextAreaWithLabelProps> = ({
  label,
  value,
  onChange,
  placeholder,
  className,
  id
}) => {
  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className}>
      <label className="naxatw-block naxatw-mb-1">{label}</label>
      <TextArea id={id} label={label} value={value} onChange={handleTextAreaChange} placeholder={placeholder} />
    </div>
  );
};

export default TextAreaWithLabel;
