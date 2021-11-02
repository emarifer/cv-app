import styled from "@emotion/styled";
import { ImageStyled } from "../components/ImageStyled";
import { ReactComponent as Md, attributes } from "./markdown/post.md";
import { Helmet } from "react-helmet-async";

const MarkdownStyled = styled.div`
  h1 {
    font-size: 2.3rem;
    text-align: center;
  }

  h2 {
    font-size: 1.7rem;
  }

  ul,
  h4 {
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 3px 3px 6px 2px rgba(220, 220, 220, 0.4);
    background-color: #c8ddff;
    color: #3d3d3d;
    font-weight: 400;
    margin: 2rem 4rem;
  }

  h4 {
    line-height: 1.5rem;
  }

  h4 strong {
    display: block;
    margin: 1rem 0;
  }

  li {
    margin: 0.6rem 0 0.6rem 1rem;
  }

  img {
    ${ImageStyled}
  }

  a {
    text-decoration: none;
    color: #2377ff;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    ul,
    h4 {
      min-width: 280px;
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 400;
      margin: 1.5rem 0.5rem;
    }

    h4 {
      line-height: 1.4rem;
    }

    h4 strong {
      display: block;
      margin: 1rem 0;
    }

    li {
      margin: 0.6rem 0 0.6rem 1rem;
    }
  }
`;

export const PostInMarkdown = () => {
  return (
    <>
      <Helmet>
        <title>Curriculum | Mi Landing Page</title>
      </Helmet>

      <MarkdownStyled>
        <Md />
      </MarkdownStyled>
    </>
  );
};
