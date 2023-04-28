import React from 'react';

type AccordionPanelProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({ title, isActive, onClick, children }) => {
  return (
    <div className={`accordion-panel ${isActive ? 'bg-gray-100' : ''}`}>
      <div className="accordion-panel-header flex justify-between items-center p-4 cursor-pointer" onClick={onClick}>
        <div className="accordion-panel-header-title text-lg font-medium">{title}</div>
        <div className="accordion-panel-header-icon">
          <i className={`fas fa-chevron-${isActive ? 'up' : 'down'} text-gray-600`}></i>
        </div>
      </div>
      {isActive && (
        <div className="accordion-panel-content p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionPanel;
