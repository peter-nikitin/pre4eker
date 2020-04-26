import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RequestJSON from "./RequestJSON";

describe("Response form", () => {
  it("should handle click on btn", () => {
    const handleSubmit = jest.fn();

    const { getByText } = render(<RequestJSON onSubmit={handleSubmit} />);

    fireEvent.click(getByText("Показать"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
