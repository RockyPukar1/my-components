import React from 'react';
import Navbar from '../navbar/Navbar';
import Image, { ImageProps } from '../../atoms/image/Image';
import Link from '../../atoms/link/Link';

type NavbarLinkProps = ImageProps & {
  href: string;
};

const NavbarWithLogoAndLinks: React.FC<NavbarLinkProps> = ({ src, alt, width, height }) => {
  return (
    <Navbar>
      <Image src={src} alt={alt} width={width} height={height} />
      <div className="naxatw-flex naxatw-justify-end">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </Navbar>
  );
};

export default NavbarWithLogoAndLinks;
