import "@testing-library/jest-dom";
import { renderWithProviders } from "../../../../../util/testUtils";
import SearchCharacterDetails from "../SearchCharacterDetails";
import { fireEvent, screen } from "@testing-library/react";

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
describe("SearchCharacterDetails", () => {
  it("should render SearchCharacterDetails", async () => {
    renderWithProviders(<SearchCharacterDetails character={character} />);
    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
    expect(await screen.findByText("Alive")).toBeInTheDocument();
    expect(await screen.findByText("Human")).toBeInTheDocument();
  });
});
