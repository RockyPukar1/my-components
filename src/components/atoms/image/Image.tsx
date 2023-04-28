import React from 'react';

type ImageProps = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Image;
