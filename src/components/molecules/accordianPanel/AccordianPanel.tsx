import React from 'react';

type AccordionPanelProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({ title, isActive, onClick, children }) => {
  return (
    <div className={`accordion-panel ${isActive ? 'naxatw-bg-gray-100' : ''}`}>
      <div className="accordion-panel-header naxatw-flex naxatw-justify-between naxatw-items-center naxatw-p-4 naxatw-cursor-pointer" onClick={onClick}>
        <div className="accordion-panel-header-title naxatw-text-lg naxatw-font-medium">{title}</div>
        <div className="accordion-panel-header-icon">
        <span className="material-symbols-outlined">{isActive ? 'expand_less' : 'expand_more'}</span>
        </div>
      </div>
      {isActive && (
        <div className="accordion-panel-content naxatw-p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionPanel;
