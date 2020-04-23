import React from "react";
import Response from "./Response";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
} from "@testing-library/react";
import response, {
  noLines,
  noResponse,
  noCustomer,
  noOrder,
} from "data/response";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

describe("Response snapshot", () => {
  test(`full response to match snapshot`, () => {
    const { asFragment, getByRole } = render(<Response response={response} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(` response without lines to match snapshot`, () => {
    const { asFragment, getByRole } = render(<Response response={noLines} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(` empty response to match snapshot`, () => {
    const { asFragment, getByRole } = render(
      <Response response={noResponse} />
    );
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(` response without customer to match snapshot`, () => {
    const { asFragment, getByRole } = render(
      <Response response={noCustomer} />
    );
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(` response without order to match snapshot`, () => {
    const { asFragment, getByRole } = render(<Response response={noOrder} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });
});
