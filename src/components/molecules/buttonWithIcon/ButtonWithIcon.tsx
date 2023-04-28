import React from 'react';
import Button, {ButtonType} from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';

type ButtonWithIconProps = {
  label: string;
  icon: 'coffee' | 'envelope';
  onClick?: () => void;
  disabled?: boolean;
  type: ButtonType;
  className?: string
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  label,
  icon,
  onClick,
  disabled,
  type,
  className
}) => {
  return (
    <Button onClick={onClick} disabled={disabled} type={type} className={className}>
      <div className="naxatw-flex naxatw-items-center naxatw-justify-center">
        <div className="naxatw-mr-2">
          <Icon name={icon} />
        </div>
        <div>{label}</div>
      </div>
    </Button>
  );
};

export default ButtonWithIcon;
