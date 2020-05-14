import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RequestJSON from "./RequestJSON";

describe("Response form", () => {
  it("should handle click on btn", () => {
    const handleSubmit = jest.fn();

    const { asFragment } = render(<RequestJSON handleSubmit={handleSubmit} />);

    expect(asFragment(<RequestJSON />)).toMatchSnapshot();
  });
});
