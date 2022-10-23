import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { CharacterType } from "../../redux";
import { CharacterState } from "../../redux/reducers/characters";
import { useAppSelector } from "../../redux/useAppSelector";

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
      <div>
        <h1>List</h1>
      </div>
    );
  }
}
