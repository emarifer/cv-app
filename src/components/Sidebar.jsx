/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { SiteLink } from "./SiteLink";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  position: fixed;
  top: 4rem;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  background-color: whitesmoke;
  z-index: 1000;
  position: fixed;
  top: 4rem;
  bottom: 0;
  left: 0;
  width: 70%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.showSidebarMenu ? "translate(0, 0)" : "translate(-100%, 0)"};
`;

const WebsiteList = styled.ul`
  background: #c8ddff;
  margin: 0;
  padding: 1rem 0 1rem 1.7rem;
  list-style-type: none;
`;

const elementList = css`
  margin: 1rem 0;
`;

const WebsiteLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  color: #2377ff;
`;

const SiteList = styled.ul`
  background: #d4d4d4;
  height: 100%;
  margin: 0;
  padding: 1rem 0 1rem 1.7rem;
  list-style-type: none;
`;

export const Sidebar = ({ showSidebarMenu, setShowSidebarMenu }) => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) setShowSidebarMenu(false);
  };

  return (
    <>
      <Menu showSidebarMenu={showSidebarMenu}>
        <WebsiteList>
          <li css={elementList}>
            <WebsiteLink
              href="https://www.laserrania.org/autor/enrique-marin-fernandez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImBooks />
              &nbsp;&nbsp;Mis Libros
            </WebsiteLink>
          </li>
          <li css={elementList}>
            <WebsiteLink
              href="https://github.com/emarifer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
              &nbsp;&nbsp;Mi GitHub
            </WebsiteLink>
          </li>
          <li css={elementList}>
            <WebsiteLink
              href="https://emarifer-pwa.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite />
              &nbsp;&nbsp;Mi Web Site
            </WebsiteLink>
          </li>
        </WebsiteList>

        <SiteList>
          <li css={elementList}>
            <SiteLink
              href="/"
              showSidebarMenu={showSidebarMenu}
              setShowSidebarMenu={setShowSidebarMenu}
            >
              <AiFillHome />
              &nbsp;&nbsp;Inicio
            </SiteLink>
          </li>
          <li css={elementList}>
            <SiteLink
              href="/cv-page"
              showSidebarMenu={showSidebarMenu}
              setShowSidebarMenu={setShowSidebarMenu}
            >
              <BsNewspaper />
              &nbsp;&nbsp;Mi CV
            </SiteLink>
          </li>
        </SiteList>
      </Menu>
      {showSidebarMenu && (
        <Overlay onClick={() => setShowSidebarMenu(!showSidebarMenu)} />
      )}
    </>
  );
};

/**
 * PASAR UNA PROPS A UN STYLED COMPONENT PARA QUE CAMBIE ALGUNOS DE SUS ATRIBUTOS CSS
 * DE FORMA CONDICIONAL, P.EJ, UNA ANIMACION. VER:
 * https://stackoverflow.com/questions/44459813/adding-transitions-to-styled-components#57586503
 *
 * AÑADIR CLASES A UN STYLED COMPONENT. VER:
 * https://stackoverflow.com/questions/59756648/add-classes-to-styled-component
 */
