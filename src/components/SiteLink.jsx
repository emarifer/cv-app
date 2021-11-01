/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, useRoute } from "wouter";

const SiteLinkStyled = styled(Link)`
  font-size: 1rem;
  font-weight: bold;
  color: #1f1f1f;
  text-decoration: none;
`;

const active = css`
  border-left: 3px solid #2377ff;
  padding-left: 3px;
  color: #2377ff;
`;

export const SiteLink = ({
  href,
  children,
  showSidebarMenu,
  setShowSidebarMenu,
}) => {
  const [isActive] = useRoute(href);

  return (
    <SiteLinkStyled
      href={href}
      css={isActive && active}
      onClick={() => setShowSidebarMenu(!showSidebarMenu)}
    >
      {children}
    </SiteLinkStyled>
  );
};
