import { render } from "@testing-library/react";
import { renderWithProviders } from "../../../../../util/testUtils";
import FilterMenu from "../SearchMenu";

describe("SearchMenu", () => {
  it("renders", () => {
    renderWithProviders(<FilterMenu />);
  });
});
