import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Route } from "wouter";
import { Home } from "./pages/Home";
import { PostInMarkdown } from "./pages/PostInMarkdown";
import { ButtonToTop } from "./components/ButtoToTop";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Navbar } from "./components/Navbar";
import { Sidebar } from './components/Sidebar';

const Container = styled.div`
  padding: 6rem 2rem 2rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 0.5rem 0.8rem 0.5rem;
  }
`;

const scrollToTop = () => {
  scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

export const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleChangeScroll);
    return () => window.removeEventListener("scroll", handleChangeScroll);
  }, []);

  const handleChangeScroll = () => {
    const scrollTop = pageYOffset || window.document.documentElement.scrollTop; // Por si un navegador antiguo no detectara «pageYOffset»
    setShowBtn(scrollTop > 300 ? true : false);
  };

  return (
    <>
      <Navbar
        showSidebarMenu={showSidebarMenu}
        setShowSidebarMenu={setShowSidebarMenu}
      />

      <Container>
        <Route path="/" component={Home} />
        <Route path="/cv-page" component={PostInMarkdown} />
      </Container>

      {showBtn && (
        <ButtonToTop onClick={scrollToTop}>
          <MdKeyboardArrowUp />
        </ButtonToTop>
      )}

      <Sidebar
        showSidebarMenu={showSidebarMenu}
        setShowSidebarMenu={setShowSidebarMenu}
      />
    </>
  );
};
