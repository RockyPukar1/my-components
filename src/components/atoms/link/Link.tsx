import React from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        {children}
      </a>
    </li>
  );
};

export default Link;
