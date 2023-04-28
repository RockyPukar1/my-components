import React, { useState } from 'react';
import Accordion from '../accordian/Accordian';
import AccordionPanel from '../accordianPanel/AccordianPanel';

type AccordionWithMultiplePanelsProps = {
  panels: {
    title: string;
    content: string;
  }[];
}

const AccordionWithMultiplePanels: React.FC<AccordionWithMultiplePanelsProps> = ({ panels }) => {
  const [activePanelIndex, setActivePanelIndex] = useState(-1);

  const handlePanelClick = (panelIndex: number) => {
    setActivePanelIndex(panelIndex === activePanelIndex ? -1 : panelIndex);
  };

  return (
    <Accordion>
      {panels.map((panel, index) => (
        <AccordionPanel
          key={index}
          title={panel.title}
          isActive={index === activePanelIndex}
          onClick={() => handlePanelClick(index)}
        >
          {panel.content}
        </AccordionPanel>
      ))}
    </Accordion>
  );
};

export default AccordionWithMultiplePanels;
