import styled from "styled-components";

export const ContainerItem = styled.button`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: none;

  gap: 16px;

  padding: 30px;

  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 16px;

  cursor: pointer;

  transition: filter 1s;

  img {
    width: 100%;
    border-radius: 8px;
    transition: width 1s;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme["primary-text"]};
  }

  &:hover {
    filter: brightness(0.6);

    img {
      width: 105%;
    }
  }
`;
