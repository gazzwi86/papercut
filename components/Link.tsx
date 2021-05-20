import * as React from "react";
import Anchor from "next/link";
import styled from "styled-components";

export interface LinkProps {
  text: string;
  href: string;
};

const A = styled.a`
  font-size: ${({ theme }) => theme.font.size.normal};
  color: ${({ theme }) => theme.colors.primary};
`

const Link: React.FC<LinkProps> = ({
  text,
  href,
}) => (
  <Anchor href={href}>
    <A>{text}</A>
  </Anchor>
);

export default Link;
