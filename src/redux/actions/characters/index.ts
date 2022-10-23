import { CharacterType } from "../../types";
import * as types from "../../types/reducers";

export function getCharacterRequest(token: string): {
  type: string;
  payload: string;
} {
  return {
    type: types.GET_CHARACTER_REQUEST,
    payload: token,
  };
}

export function getCharacterSuccess(character: CharacterType[]): {
  type: string;
  payload: CharacterType[];
} {
  return {
    type: types.GET_CHARACTER_SUCCESS,
    payload: character,
  };
}

export function getCharacterFailure(character: CharacterType[]): {
  type: string;
  payload: CharacterType[];
} {
  return {
    type: types.GET_CHARACTER_FAILURE,
    payload: character,
  };
}
