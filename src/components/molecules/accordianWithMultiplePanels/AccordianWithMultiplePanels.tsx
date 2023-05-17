import React, { useState } from 'react';
import Accordion from '../accordian/Accordian';
import AccordionPanel from '../accordianPanel/AccordianPanel';

type AccordianWithMultiplePanelsProps = {
  panels: {
    title: string;
    content: string;
  }[];
}

const AccordianWithMultiplePanels: React.FC<AccordianWithMultiplePanelsProps> = ({ panels }) => {
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

export default AccordianWithMultiplePanels;
