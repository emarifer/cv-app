/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react' // SI NO SE AÑADE, TENIENDO @jsxRuntime classic ACTIVADO, DARA ERROR
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonLink } from "../components/ButtonLink";
import { ImageStyled } from "../components/ImageStyled";
import { Helmet } from "react-helmet-async";

const Common = css`
  color: #8099c2;
  line-height: 1.7rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 1.7rem;
  }

  p {
    color: #8099c2;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }

    img {
      width: 260px;
    }
  }
`;

const Separator = styled.hr`
  width: 90%;
  border: 1px solid #8099c2;
`;

const Content = styled.div`
  margin: 0 3rem;
  text-align: left;
  ${Common};

  p {
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    margin: 1rem 8rem;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

const Footer = styled.footer`
  margin: 1rem 0;
  ${Common};
`;

export const Home = ({ props }) => {
  return (
    <>
      <Helmet>
        <title>Home | Mi Landing Page</title>
      </Helmet>
      <Wrapper>
        <img css={ImageStyled} src="img/avatar.jpeg" alt="avatar" />
        <h1>Mi Landing Page</h1>
        <p>¿En qué puede ayudarte?</p>
        <ButtonLink href="cv-page">Revisa mi CV</ButtonLink>
        <Separator />
        <Content>
          <h3>¡¡¡Saludos!!!</h3>
          <p>
            Te presento mi landing page para que sepas algo sobre mí. Cualquier
            duda que se te ofrezca te la resolveré si te pones en contacto
            conmigo através de e-mail o teléfono. ¡Te espero!
          </p>
        </Content>
        <Separator />
        <Footer>MIT Licensed | Copyright © 2022 Enrique Marín</Footer>
      </Wrapper>
    </>
  );
};
