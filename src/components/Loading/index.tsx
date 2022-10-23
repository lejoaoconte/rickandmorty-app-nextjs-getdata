import homeLogo from "../../assets/homeLogo.png";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <img src={homeLogo.src} />
    </Container>
  );
}
