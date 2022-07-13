/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NotFound from "../index";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

test("renders not found page", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/404 - Not Found!/i);
  expect(linkElement).toBeInTheDocument();
});
