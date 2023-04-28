import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';

type DropdownProps = {
  options: string[];
  onSelectOption: (option: string) => void;
  selectedOption?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectOption, selectedOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setIsDropdownOpen(false);
    onSelectOption(option);
  };

  return (
    <div className="dropdown">
      <Button onClick={handleDropdownClick}>
        {selectedOption || 'Select an option'}
        <Icon name={isDropdownOpen ? 'chevron-up' : 'chevron-down'} />
      </Button>
      {isDropdownOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)} className="dropdown-option">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
