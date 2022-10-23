import { CharacterType } from "../../types";
import * as types from "../../types/reducers";

export interface CharacterState {
  character: CharacterType[];
  loading: boolean;
  error: string;
}

const initialState: CharacterState = {
  character: [],
  loading: false,
  error: "",
};

export function characterReducer(
  state = initialState,
  action: { type: string; payload: CharacterType[] }
) {
  switch (action.type) {
    case types.GET_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true,
        character: action.payload,
        error: "",
      };
    case types.GET_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: false,
        character: action.payload,
        error: "",
      };
    case types.GET_CHARACTER_FAILURE:
      return {
        ...state,
        loading: false,
        character: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
