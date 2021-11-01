import styled from "@emotion/styled";

export const ButtonToTop = styled.button`
  display: flex;
  border: 1px solid whitesmoke;
  border-radius: 50%;
  cursor: pointer;
  font-size: 2.5rem;
  width: 3.2rem;
  height: 3.2rem;
  align-items: center;
  justify-content: center;
  background-color: #2377ff;
  outline: none;
  color: whitesmoke;
  position: fixed;
  z-index: 100;
  bottom: 1rem;
  left: 1rem;

  &:hover {
    transition: transform 100ms;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    background-color: transparent;
    border: 3px solid #2377ff;
    color: #2377ff;
  }
`;
