import React from 'react';

type OverlayProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Overlay: React.FC<OverlayProps> = ({ onClick, children }) => {
  return (
    <div className="overlay" onClick={onClick}>
      {children}
    </div>
  );
};

export default Overlay;
