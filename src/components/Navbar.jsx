import styled from "@emotion/styled";
import { Link } from "wouter";
import { NavLink } from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { MenuIcon } from "./MenuIcon";

const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #b3b3b3;
  padding: 1rem;
  width: 100%;
  height: 4rem;
  box-shadow: 6px 6px 6px 2px rgba(220, 220, 220, 0.4);

  @media screen and (max-width: 768px) {
    justify-content: left;
  }
`;

const SmallStyled = styled.small`
  font-size: 1.4rem;
  font-weight: bold;
  color: #1f1f1f;
  cursor: pointer;
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Separator = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 6rem;
  a:first-of-type { /* Asigna la propiedad solo al primero de los NavLinks */
      margin-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const AnchorStyled = styled.a`
  text-decoration: none;
  color: #1f1f1f;
  margin-left: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = ({ showSidebarMenu, setShowSidebarMenu }) => {
  return (
    <NavbarStyled>
      <MenuTitle>
        {!showSidebarMenu ? (
          <MenuIcon>
            <GiHamburgerMenu
              onClick={() => setShowSidebarMenu(!showSidebarMenu)}
            />
          </MenuIcon>
        ) : (
          <MenuIcon>
            <GrClose onClick={() => setShowSidebarMenu(!showSidebarMenu)} />
          </MenuIcon>
        )}

        <Link to="/">
          <SmallStyled>Mi Landing Page</SmallStyled>
        </Link>
      </MenuTitle>

      <Separator>
        <NavLink href="/">
          Inicio
        </NavLink>
        <NavLink href="/cv-page">
          Mi CV
        </NavLink>
      </Separator>

      <div>
        <AnchorStyled
          href="https://www.laserrania.org/autor/enrique-marin-fernandez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mis Libros
        </AnchorStyled>
        <AnchorStyled
          href="https://github.com/emarifer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi GitHub
        </AnchorStyled>
        <AnchorStyled
          href="https://emarifer-pwa.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi Web Site
        </AnchorStyled>
      </div>
    </NavbarStyled>
  );
};
