import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getCharacterFailure, getCharacterSuccess } from "../../actions";
import api from "../../api";
import { CharacterType } from "../../types";
import * as types from "../../types/reducers";

let characterApi: CharacterType[];

const characterRequest = async (token: string) => {
  try {
    const res = await api.get("character");
    const { results } = res.data;
    characterApi = results;
    return true;
  } catch (e) {
    return false;
  }
};

export function* characterData(action: { type: string; payload: string }) {
  try {
    yield call(characterRequest, action.payload);
    yield put(getCharacterSuccess(characterApi));
  } catch (e) {
    yield put(getCharacterFailure(characterApi));
  }
}

export default all([takeLatest(types.GET_CHARACTER_REQUEST, characterData)]);
