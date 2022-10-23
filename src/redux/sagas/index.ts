import { all } from "@redux-saga/core/effects";
import character from "./character";

export default function* rootSaga(): Generator<any> {
  return yield all([character]);
}
