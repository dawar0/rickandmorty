import { screen } from "@testing-library/react";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

import { MockedProvider } from "@apollo/react-testing";

// The component AND the query need to be exported
import { GET_CHARACTERS } from "../../../api/Queries";
import SearchCharacterList from "../SearchCharacterList";
import { renderWithProviders } from "../../../../../util/testUtils";

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        name: "",
        status: "",
        species: "",
        gender: "",
      },
    },
    result: {
      data: {
        characters: {
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 1,
              name: "Rick Sanchez",
              status: "Alive",
              species: "Human",
              type: "",
              gender: "Male",
              location: {
                id: 20,
                name: "Earth (Replacement Dimension)",
              },
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              origin: {
                id: 1,
                name: "Earth (C-137)",
              },
              episode: [
                {
                  id: 1,
                  name: "Pilot",
                },
              ],
            },
          ],
        },
      },
    },
  },
];
const noDataMock = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        name: "",
        status: "",
        species: "",
        gender: "",
      },
    },
    result: {
      data: {
        characters: {
          info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null,
          },
          results: [],
        },
      },
    },
  },
];
describe("SearchCharacter", () => {
  it("should render SearchCharacter", async () => {
    renderWithProviders(
      <MockedProvider mocks={mocks}>
        <SearchCharacterList />
      </MockedProvider>
    );
    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
    expect(await screen.findByText("Alive")).toBeInTheDocument();
    expect(await screen.findByText("Human")).toBeInTheDocument();
  });
  it("should error when no data is returned", async () => {
    renderWithProviders(
      <MockedProvider mocks={noDataMock}>
        <SearchCharacterList />
      </MockedProvider>
    );
    expect(await screen.findByText("No results found")).toBeInTheDocument();
  });
});
