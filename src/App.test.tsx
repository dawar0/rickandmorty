import React from "react";
import "jest-canvas-mock";
import { screen, render } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./util/testUtils";

test("app renders", async () => {
  render(<App />);
});
