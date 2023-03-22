import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import type { RootState, Dispatch } from "../../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
