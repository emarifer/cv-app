import styled from "@emotion/styled";
import { Link } from "wouter";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ButtonStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2377ff;
  color: whitesmoke;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem auto;
  padding: 1rem 1.3rem;
  border-radius: 3px;
  text-decoration: none;

  :hover {
    transition: transform 100ms;
    transform: scale(1.1);
  }
`;

export const ButtonLink = ({ children, href }) => {
  return (
    <ButtonStyled href={href}>
      {children}&nbsp;&nbsp;
      <MdOutlineArrowRightAlt />
    </ButtonStyled>
  );
};
