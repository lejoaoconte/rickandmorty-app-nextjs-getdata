import Router from "next/router";
import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { getCharacterRequest } from "../redux";
import { CharacterState } from "../redux/reducers/characters";
import { useAppDispatch, useAppSelector } from "../redux/useAppSelector";

export default function Home() {
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

    Router.push("/list");
  }, []);

  if (loading) return <Loading />;
  else return null;
}
