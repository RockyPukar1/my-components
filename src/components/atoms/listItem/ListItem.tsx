import React from 'react';

type ListItemProps = {
  onClick: () => void;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ onClick, children }) => {
  return (
    <li className="naxatw-p-2 hover:naxatw-bg-gray-200 naxatw-cursor-pointer" onClick={onClick}>
      {children}
    </li>
  );
};

export default ListItem;
