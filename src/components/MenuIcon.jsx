import styled from "@emotion/styled";

const MenuIconStyled = styled.div`
  color: #555;
  font-size: 1.4rem;
  margin-right: 3rem;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuIcon = ({ children }) => {
  return <MenuIconStyled>{children}</MenuIconStyled>;
};
