import { useEffect } from "react";

import { useRouter } from "next/router";

import { Loading } from "src/components/Loading";

import { getCharacterRequest } from "src/redux";
import { CharacterState } from "src/redux/reducers/characters";
import { useAppDispatch, useAppSelector } from "src/redux/useAppSelector";

export default function Home() {
  const router = useRouter();
  const characterState: CharacterState = useAppSelector(
    (state) => state.character
  );
  const dispatch = useAppDispatch();

  const loading =
    characterState.loading || characterState.character.length === 0;

  useEffect(() => {
    if (characterState.character.length > 0) {
      localStorage.setItem(
        "character",
        JSON.stringify(characterState.character)
      );
    }
  }, [characterState.character.length]);

  useEffect(() => {
    dispatch(getCharacterRequest(""));

    router.push("/list");
  }, []);

  if (loading) return <Loading />;
  else return null;
}
