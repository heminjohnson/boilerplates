/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "../App";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

test("renders App", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/React-Typescript/i);
  expect(linkElement).toBeInTheDocument();
});
