import { CharacterType } from "src/redux";
import { ContainerItem } from "./styles";

export function ListItem({ id, image, name }: CharacterType) {
  return (
    <ContainerItem>
      <img src={image} alt="name" />
      <p>{name}</p>
    </ContainerItem>
  );
}
