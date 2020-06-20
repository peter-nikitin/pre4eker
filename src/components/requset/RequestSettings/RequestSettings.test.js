import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import RequestSettings from "./RequestSettings";

describe("RequestSettings ", () => {
  it("should render passed values", () => {
    const requestJSON = { endpoint: "a", operation: "b" };
    const setRequestJSON = jest.fn();
    const setKey = jest.fn();
    const keyValue = "";

    const component = render(
      <RequestSettings
        requestJSON={requestJSON}
        setRequestJSON={setRequestJSON}
        setKey={setKey}
        keyValue={keyValue}
      />
    );

    expect(component.getByLabelText("Эндпоин").value).toBe("a");
    expect(component.getByLabelText("Операция").value).toBe("b");
  });

  it("should handle change on endpoint filed", async () => {
    const requestJSON = { endpoint: "a", operation: "b" };
    const setRequestJSON = jest.fn();
    const setKey = jest.fn();
    const keyValue = "";

    const { getByLabelText } = render(
      <RequestSettings
        requestJSON={requestJSON}
        setRequestJSON={setRequestJSON}
        setKey={setKey}
        keyValue={keyValue}
      />
    );

    fireEvent.change(getByLabelText("Эндпоин"), { target: { value: "c" } });
    expect(setRequestJSON).toHaveBeenCalledWith({
      operation: "b",
      endpoint: "c",
    });
  });
});
