import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'subtitle';
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  className,
}) => {
  const variants = {
    h1: 'naxatw-text-5xl naxatw-font-bold',
    h2: 'naxatw-text-4xl naxatw-font-bold',
    h3: 'naxatw-text-3xl naxatw-font-bold',
    h4: 'naxatw-text-2xl naxatw-font-bold',
    h5: 'naxatw-text-xl naxatw-font-bold',
    h6: 'naxatw-text-lg naxatw-font-bold',
    body: 'naxatw-text-base naxatw-font-medium',
    caption: 'naxatw-text-sm naxatw-font-medium',
    subtitle: 'naxatw-text-sm naxatw-font-small'
  };

  return (
    <p className={`${variants[variant]} ${className ?? ''}`}>{children}</p>
  );
};

export default Typography;
