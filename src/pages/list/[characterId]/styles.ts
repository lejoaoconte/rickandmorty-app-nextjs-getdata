import styled from "styled-components";

const DivsData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Container = styled(DivsData)`
  width: 100%;
  flex-direction: column;

  gap: 30px;
`;

export const ButtonGoBack = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme["primary-text"]};
  font-size: 1rem;
  font-weight: bold;

  transition: opacity 1s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CharacterName = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme["primary-text"]};
`;

export const CharacterData = styled(DivsData)`
  width: 100%;
  gap: 60px;

  flex-direction: row;

  @media screen and (max-width: 750px) {
    flex-direction: column;

    img {
      margin: 0 auto;
    }
  }
`;

export const MoreInformations = styled(DivsData)`
  flex-direction: column;
  gap: 30px;

  p {
    font-size: 1.5rem;

    span {
      font-weight: bold;
    }
  }
`;
