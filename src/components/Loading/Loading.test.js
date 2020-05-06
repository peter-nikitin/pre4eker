import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loading from "./Loading";

afterEach(cleanup);
test("Loading has to match snapshot", () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment(<Loading />)).toMatchSnapshot();
});
