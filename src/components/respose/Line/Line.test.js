import React from "react";
import { render, cleanup } from "@testing-library/react";
import response from "data/response";
import Line from "./Line";

afterEach(cleanup);

const { lines } = response.order;

test("Line has to match snapshot", () => {
  const { asFragment } = render(<Line lineInfo={lines[0]} />);
  expect(asFragment(<Line />)).toMatchSnapshot();
});
