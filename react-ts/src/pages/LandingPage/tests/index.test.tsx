/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import React from "react";
import { render, screen } from "@testing-library/react";

import LandingPage from "../index";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

test("renders landing page", () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/React-Typescript/i);
  expect(linkElement).toBeInTheDocument();
});
