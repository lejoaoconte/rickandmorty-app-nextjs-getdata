import { useEffect, useState } from "react";
import { ListItem } from "src/components/ListItem";
import { Loading } from "../../components/Loading";
import { CharacterType } from "../../redux";
import { CharacterState } from "../../redux/reducers/characters";
import { useAppSelector } from "../../redux/useAppSelector";
import { Container } from "./styles";

export default function List() {
  const characterState: CharacterState = useAppSelector(
    (state) => state.character
  );

  const [character, setCharacter] = useState<CharacterType[]>([]);

  useEffect(() => {
    if (characterState.character.length !== 0)
      setCharacter(characterState.character);
    else setCharacter(JSON.parse(localStorage?.getItem("character") || "[]"));
  }, []);

  if (character.length === 0) {
    <Loading />;
  } else {
    return (
      <Container>
        {character.map(({ id, image, name }: CharacterType) => (
          <ListItem key={id} id={id} name={name} image={image} />
        ))}
      </Container>
    );
  }
}
