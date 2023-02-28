import { render } from "@testing-library/react";
import { renderWithProviders } from "../../../../../util/testUtils";
import SearchCharacter from "../SearchCharacter";

describe("SearchCharacter", (): void => {
  const character = {
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
  it("should render correctly", (): void => {
    renderWithProviders(<SearchCharacter character={character} />);
  });
});
