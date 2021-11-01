/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, useRoute } from "wouter";

const NavLinkStyled = styled(Link)`
  color: #2377ff;
  font-weight: bolder;
  text-decoration: none;
  padding-bottom: 3px;
`;

const active = css`
  border-bottom: 3px solid #2377ff;
`;

export const NavLink = ({ href, children }) => {
  const [isActive] = useRoute(href);

  return (
    <NavLinkStyled href={href} css={isActive && active}>
      {children}
    </NavLinkStyled>
  );
};
