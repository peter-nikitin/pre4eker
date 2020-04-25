import React from "react";
import { render, cleanup } from "@testing-library/react";
import response, {
  noLines,
  noResponse,
  noCustomer,
  noOrder,
} from "data/response";
import Response from "./Response";

afterEach(cleanup);

describe("Response snapshot", () => {
  test("full response to match snapshot", () => {
    const { asFragment } = render(<Response response={response} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(" response without lines to match snapshot", () => {
    const { asFragment } = render(<Response response={noLines} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(" empty response to match snapshot", () => {
    const { asFragment } = render(<Response response={noResponse} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(" response without customer to match snapshot", () => {
    const { asFragment } = render(<Response response={noCustomer} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });

  test(" response without order to match snapshot", () => {
    const { asFragment } = render(<Response response={noOrder} />);
    expect(asFragment(<Response />)).toMatchSnapshot();
  });
});
