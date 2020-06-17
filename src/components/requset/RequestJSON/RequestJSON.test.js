import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import RequestJSON from "./RequestJSON";

describe("Request JSON form", () => {
  it("should show set data", () => {
    const setJSON = jest.fn();
    const handleSubmit = jest.fn();
    const expectText = { a: "b" };
    let shownText;

    const { getByText } = render(
      <RequestJSON
        setRequestJSON={setJSON}
        requestJSON={expectText}
        handleSubmit={handleSubmit}
      />
    );

    act(() => {
      window.editor.current.editor.setValue(expectText);
      console.log(window.editor.current.editor.container.innerText);
    });

    // expect(shownText).toBe('{"a": "b"}');
  });
});
