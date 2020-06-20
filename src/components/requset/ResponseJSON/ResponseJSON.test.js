import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ResponseJSON from "./ResponseJSON";

describe("Response JSON form", () => {
  it("should handle click on btn", () => {
    const setJSON = jest.fn();

    const { getByText } = render(<ResponseJSON setJSON={setJSON} />);

    const expectText = `{"a": "b"}`;

    act(() => {
      window.editor.current.editor.setValue(expectText);
    });

    fireEvent.click(getByText("Показать"));

    expect(setJSON).toHaveBeenCalledWith({ a: "b" });
  });
});
