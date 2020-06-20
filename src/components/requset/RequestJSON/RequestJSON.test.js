import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import RequestJSON from "./RequestJSON";

describe("RequestJSON form", () => {
  it("should handle change on editor", () => {
    const handleSubmit = jest.fn();
    const setRequestJSON = jest.fn();
    const requestJSON = { body: {} };

    render(
      <RequestJSON
        handleSubmit={handleSubmit}
        setRequestJSON={setRequestJSON}
        requestJSON={requestJSON}
      />
    );

    act(() => {
      window.editor.current.editor.setValue(JSON.stringify({ a: 1 }));
    });

    expect(window.editor.current.editor.session.getDocument().getValue()).toBe(
      JSON.stringify({ a: 1 })
    );
  });

  it("should despatch editor content to redux", () => {
    const handleSubmit = jest.fn();
    const setRequestJSON = jest.fn();
    const requestJSON = { body: {} };

    render(
      <RequestJSON
        handleSubmit={handleSubmit}
        setRequestJSON={setRequestJSON}
        requestJSON={requestJSON}
      />
    );

    act(() => {
      window.editor.current.editor.setValue(JSON.stringify({ a: 1 }));
    });

    expect(setRequestJSON).toHaveBeenCalledWith({ body: { a: 1 } });
  });
});
