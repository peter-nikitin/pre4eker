import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import response from "data/response";
import Order from "./Order";

afterEach(cleanup);

const { order } = response;

test("order with data match snapshot", () => {
  const { asFragment } = render(<Order order={order} />);
  expect(asFragment(<Order />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole("button"));
  expect(asFragment(<Order />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole("button"));
  expect(asFragment(<Order />)).toMatchSnapshot();
});
