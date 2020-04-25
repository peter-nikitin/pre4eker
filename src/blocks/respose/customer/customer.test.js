import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import response from "data/response";
import Customer from "./Customer";

afterEach(cleanup);

const { customer } = response;

test("customer match snapshot", () => {
  const { asFragment } = render(<Customer customer={customer} />);
  expect(asFragment(<Customer />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole("button"));
  expect(asFragment(<Customer />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole("button"));
  expect(asFragment(<Customer />)).toMatchSnapshot();
});
