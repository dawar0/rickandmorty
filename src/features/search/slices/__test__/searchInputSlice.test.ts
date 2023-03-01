import reducer, {
  updateIsSelected,
  updateSearchInput,
} from "../searchInputSlice";

describe("searchInputSlice", () => {
  const initialState = {
    value: "",
    isSelected: null,
    selectedFilters: {
      status: "" as "Alive" | "Dead" | "unknown" | "",
      species: "" as
        | "Human"
        | "Alien"
        | "Humanoid"
        | "Mytholog"
        | "Poopybutthole"
        | "Animal"
        | "Robot"
        | "Cronenberg"
        | "Disease"
        | "Parasite"
        | "unknown"
        | "",
      gender: "" as "male" | "female" | "genderless" | "unknown" | "",
    },
  };
  const favoriteCharacter = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    url: "https://rickandmortyapi.com/api/character/1",
    location: {
      id: 20,
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    origin: {
      id: 1,
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    episode: [
      {
        id: 1,
        name: "Pilot",
        url: "https://rickandmortyapi.com/api/episode/1",
      },
    ],
  };
  it("should update search input", async () => {
    const expectedState = {
      value: "Rick",
      isSelected: null,
      selectedFilters: {
        status: "",
        species: "",
        gender: "",
      },
    };
    const action = updateSearchInput("Rick");
    const actualState = reducer(initialState, action);
    expect(actualState).toEqual(expectedState);
  });
  it("should update selectedFilters", async () => {
    const expectedState = {
      value: "",
      isSelected: favoriteCharacter,
      selectedFilters: {
        status: "",
        species: "",
        gender: "",
      },
    };
    const action = updateIsSelected(favoriteCharacter);
    const actualState = reducer(initialState, action);
    expect(actualState).toEqual(expectedState);
  });
});
