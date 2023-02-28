import { render } from "@testing-library/react";
import PaginationMessage from "../PaginationMessage";

describe("PaginationMessage", (): void => {
  it("should render correctly", (): void => {
    render(<PaginationMessage message="Hello world" />);
  });
});
