/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import React from "react";
import { render, screen } from "@testing-library/react";

import DashboardPage from "../index";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

test("renders landing page", () => {
  render(
    <DashboardPage
      name={"test user"}
      email={"testUser@test.com"}
      googleId={"123456789"}
    />
  );
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
