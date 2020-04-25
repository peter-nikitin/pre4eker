import React from "react";
import { render, cleanup } from "@testing-library/react";
import EmptyResponse from "./EmptyResponse";

afterEach(cleanup);

test("EmptyResponse has to match snapshot", () => {
  const { asFragment } = render(<EmptyResponse />);
  expect(asFragment(<EmptyResponse />)).toMatchSnapshot();
});
