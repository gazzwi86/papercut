import React from "react";
import Link, { LinkProps } from "./Link";

interface HeaderProps {
  links: LinkProps[];
}

const Header: React.FC<HeaderProps> = ({ links }) => (
  <header>
    <nav>
      {links.map((link) => (
        <Link key={link.href} text={link.text} href={link.href} />
      ))}
    </nav>
  </header>
);

export default Header;
