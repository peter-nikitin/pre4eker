import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputJSON from "./InputJSON";

describe("Form", () => {
  it("should handle click on btn", () => {
    const setJSON = jest.fn();

    const { getByText } = render(<InputJSON setJSON={setJSON} />);

    fireEvent.click(getByText("Показать"));
    expect(setJSON).toHaveBeenCalled();
  });
});
