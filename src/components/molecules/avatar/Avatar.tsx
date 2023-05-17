import React from 'react';
import Image from '../../atoms/image/Image';
import Typography from '../../atoms/typography/Typography';

export type AvatarProps = {
  src: string;
  alt: string;
  name: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'medium'
}) => {
  return (
    <div className={`avatar avatar-${size}`}>
      <Image src={src} alt={alt} />
      <Typography className="avatar-name">{name}</Typography>
    </div>
  );
};

export default Avatar;
