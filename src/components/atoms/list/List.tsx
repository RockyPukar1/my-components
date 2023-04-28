import React from 'react';

type ListProps = {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <ul className="naxatw-border naxatw-border-gray-400 naxatw-rounded-md naxatw-shadow-md naxatw-max-h-32 naxatw-overflow-y-auto">
      {children}
    </ul>
  );
};

export default List;
