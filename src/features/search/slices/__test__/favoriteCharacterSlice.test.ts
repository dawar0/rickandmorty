import reducer, { toggleFavoriteCharacter } from "../favoriteCharactersSlice";

describe("favoriteCharactersSlice", () => {
  it("should toggle favorite character", async () => {
    const initialState = {
      favoriteCharacters: [],
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
    const expectedState = {
      favoriteCharacters: [favoriteCharacter],
    };
    const action = toggleFavoriteCharacter(favoriteCharacter);
    const actualState = reducer(initialState, action);
    expect(actualState).toEqual(expectedState);
  });
});
