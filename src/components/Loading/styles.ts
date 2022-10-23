import styled from "styled-components";

export const Container = styled.div`
  @keyframes logo {
    0% {
      width: 30%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 30%;
    }
  }

  width: 60%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;

  animation-name: logo;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  img {
    width: 100%;
  }
`;
