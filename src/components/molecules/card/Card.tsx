import React from 'react';
import Button, { ButtonType } from '../../atoms/button/Button';
import Image from '../../atoms/image/Image';
import Typography from '../../atoms/typography/Typography';

export type CardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  imageSrc: string;
  buttonText?: string;
  buttonType?: ButtonType;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  subtitle,
  imageSrc,
  buttonText,
  buttonType = 'button',
  onClick,
}) => {
  return (
    <div className="card">
      <Image src={imageSrc} alt={title} />
      <div className="card-content">
        <Typography variant="h2" className="card-title">{title}</Typography>
        <Typography variant="subtitle" className="card-subtitle">{subtitle}</Typography>
        <div>{children}</div>
        {buttonText && (
          <Button onClick={onClick} type={buttonType} className="card-button">
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
