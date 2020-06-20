import React from "react";
<<<<<<< HEAD
import { render, fireEvent } from "@testing-library/react";
=======
import { render } from "@testing-library/react";
>>>>>>> d74b285e974cde9628e1c5fb6c9154cc7ebec174
import { act } from "react-dom/test-utils";

import RequestJSON from "./RequestJSON";

<<<<<<< HEAD
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
=======
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
>>>>>>> d74b285e974cde9628e1c5fb6c9154cc7ebec174
      />
    );

    act(() => {
<<<<<<< HEAD
      window.editor.current.editor.setValue(expectText);
      console.log(window.editor.current.editor.container.innerText);
    });

    // expect(shownText).toBe('{"a": "b"}');
=======
      window.editor.current.editor.setValue(JSON.stringify({ a: 1 }));
    });

    expect(setRequestJSON).toHaveBeenCalledWith({ body: { a: 1 } });
>>>>>>> d74b285e974cde9628e1c5fb6c9154cc7ebec174
  });
});
