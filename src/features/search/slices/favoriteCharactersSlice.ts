import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FavoriteCharacter } from "../type";

export interface FavoriteCharactersState {
  favoriteCharacters: FavoriteCharacter[];
}
let initialState: FavoriteCharactersState = {
  favoriteCharacters: [],
};
try {
  initialState = {
    favoriteCharacters:
      localStorage?.getItem("favoriteCharacters") !== null
        ? JSON.parse(localStorage.getItem("favoriteCharacters") || "")
        : [],
  };
} catch (error) {
  if (error instanceof ReferenceError) {
    initialState = {
      favoriteCharacters: [],
    };
  }
}

export const favoriteCharactersSlice = createSlice({
  name: "favoriteCharacters",
  initialState,

  reducers: {
    toggleFavoriteCharacter: (
      state,
      action: PayloadAction<FavoriteCharacter>
    ) => {
      const index = state.favoriteCharacters.findIndex(
        (favoriteCharacter) => favoriteCharacter.id === action.payload.id
      );
      if (index === -1) {
        state.favoriteCharacters.push(action.payload);
      } else {
        state.favoriteCharacters.splice(index, 1);
      }
    },
  },
});

export const { toggleFavoriteCharacter } = favoriteCharactersSlice.actions;
export default favoriteCharactersSlice.reducer;
