import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Filters, Character } from "../type";

export interface SearchInputState {
  value: string;
  isSelected: Character | null;
  selectedFilters: Filters;
}

const initialState: SearchInputState = {
  value: "",
  isSelected: null,
  selectedFilters: {
    status: "",
    species: "",
    gender: "",
  },
};

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    updateSearchInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    updateIsSelected: (state, action: PayloadAction<Character | null>) => {
      state.isSelected = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Filters>) => {
      state.selectedFilters = action.payload;
    },
    clearFilters: (state) => {
      state.selectedFilters = {
        status: "",
        species: "",
        gender: "",
      };
    },

    clearSearchInput: (state) => {
      state.value = "";
    },
  },
});

export const {
  updateSearchInput,
  clearSearchInput,
  updateIsSelected,
  updateFilters,
  clearFilters,
} = searchInputSlice.actions;

export default searchInputSlice.reducer;
