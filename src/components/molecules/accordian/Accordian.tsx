import React from 'react';

type AccordionProps = {
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return (
    <div className="accordion">
      {children}
    </div>
  );
};

export default Accordion;
