import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { favoriteCharactersSlice } from "../features/search/slices/favoriteCharactersSlice";
import { searchInputSlice } from "../features/search/slices/searchInputSlice";
import { PersistFavorites } from "./middlewares/persistFavorites";

export const rootReducer = combineReducers({
  searchInput: searchInputSlice.reducer,
  favoriteCharacters: favoriteCharactersSlice.reducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: [PersistFavorites],
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
