import homeLogo from "src/assets/homeLogo.png";

import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <img src={homeLogo.src} />
    </Container>
  );
}
