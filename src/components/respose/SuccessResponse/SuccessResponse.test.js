import React from "react";
import { render, cleanup } from "@testing-library/react";
import response, {
  noLines,
  noResponse,
  noCustomer,
  noOrder,
} from "data/response";
import SuccessResponse from "./SuccessResponse";

afterEach(cleanup);

describe("Response snapshot", () => {
  test("full response to match snapshot", () => {
    const { asFragment } = render(<SuccessResponse responseData={response} />);
    expect(asFragment(<SuccessResponse />)).toMatchSnapshot();
  });

  test(" response without lines to match snapshot", () => {
    const { asFragment } = render(<SuccessResponse responseData={noLines} />);
    expect(asFragment(<SuccessResponse />)).toMatchSnapshot();
  });

  test(" empty response to match snapshot", () => {
    const { asFragment } = render(
      <SuccessResponse responseData={noResponse} />
    );
    expect(asFragment(<SuccessResponse />)).toMatchSnapshot();
  });

  test(" response without customer to match snapshot", () => {
    const { asFragment } = render(
      <SuccessResponse responseData={noCustomer} />
    );
    expect(asFragment(<SuccessResponse />)).toMatchSnapshot();
  });

  test(" response without order to match snapshot", () => {
    const { asFragment } = render(<SuccessResponse responseData={noOrder} />);
    expect(asFragment(<SuccessResponse />)).toMatchSnapshot();
  });
});
