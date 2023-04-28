import React, { useState } from 'react';
import Button, { ButtonType } from '../../atoms/button/Button';
import List from '../../atoms/list/List';
import ListItem from '../../atoms/listItem/ListItem';

type DropdownMenuProps = {
  buttonText: string;
  buttonType?: ButtonType;
  options: string[];
  onSelect: (option: string) => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  buttonText,
  buttonType = 'button',
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (option: string) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown-menu">
      <Button onClick={() => setIsOpen(!isOpen)} type={buttonType}>
        {buttonText}
      </Button>
      {isOpen && (
        <List>
          {options.map((option) => (
            <ListItem key={option} onClick={() => handleItemClick(option)}>
              {option}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default DropdownMenu;
