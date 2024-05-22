import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutUsDirectory from "../../../src/components/directory/about.directory";

test("renders AboutUsDirectory and subcomponents", async () => {
  render(
    <BrowserRouter>
      <AboutUsDirectory />
    </BrowserRouter>
  );

  expect(await screen.findByTestId("main-menu")).toBeInTheDocument();
  expect(await screen.findByTestId("about-section")).toBeInTheDocument();
});
