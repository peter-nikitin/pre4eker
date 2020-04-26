import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ResponseJSON from "./ResponseJSON";

describe("Form", () => {
  it("should handle click on btn", () => {
    const setJSON = jest.fn();

    const { getByText } = render(<ResponseJSON setJSON={setJSON} />);

    fireEvent.click(getByText("Показать"));
    expect(setJSON).toHaveBeenCalled();
  });
});
