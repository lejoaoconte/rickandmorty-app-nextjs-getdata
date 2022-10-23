import { configureStore } from "@reduxjs/toolkit";
import { AnyAction, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware()

const store: Store<unknown, AnyAction> = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
export type RootStore = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export * from './actions'
export * from './types'