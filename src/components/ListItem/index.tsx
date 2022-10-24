import { useRouter } from "next/router";

import { CharacterType } from "src/redux";

import { ContainerItem } from "./styles";

export function ListItem({ id, image, name }: CharacterType) {
  const router = useRouter();
  return (
    <ContainerItem onClick={() => router.push(`/list/${id}`)}>
      <img src={image} alt="name" />
      <p>{name}</p>
    </ContainerItem>
  );
}
