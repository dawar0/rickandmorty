import { Middleware } from "@reduxjs/toolkit";

export const PersistFavorites: Middleware =
  (store: any) => (next: any) => (action: any) => {
    let nextResult = next(action);
    if (localStorage === null) return nextResult;
    if (action.type === "favoriteCharacters/toggleFavoriteCharacter") {
      localStorage?.setItem(
        "favoriteCharacters",
        JSON.stringify(store?.getState().favoriteCharacters.favoriteCharacters)
      );

      return nextResult;
    }
  };
