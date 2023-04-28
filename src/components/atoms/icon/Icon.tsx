import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

type IconProps = {
  name: 'coffee' | 'envelope';
}

const icons: Record<IconProps['name'], IconDefinition> = {
  coffee: faCoffee,
  envelope: faEnvelope,
};

const Icon: React.FC<IconProps> = ({ name }) => {
  const icon = icons[name];
  return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
