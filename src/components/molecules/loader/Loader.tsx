import React from 'react';
import Icon from '../../atoms/icon/Icon';
import Typography from '../../atoms/typography/Typography';

type LoaderProps = {
  size?: 'small' | 'medium' | 'large';
}

const Loader: React.FC<LoaderProps> = ({
  size = 'medium'
}) => {
  return (
    <div className={`loader loader-${size}`}>
      <Icon name="loader" />
      <Typography>Loading...</Typography>
    </div>
  );
};

export default Loader;
