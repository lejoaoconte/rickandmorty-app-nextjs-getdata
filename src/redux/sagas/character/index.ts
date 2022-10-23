import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import { getCharacterFailure, getCharacterSuccess } from "src/redux/actions";
import { CharacterType } from "src/redux/types";
import * as types from "src/redux/types/reducers";
import api from "src/redux/api";

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
