import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from ".";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
