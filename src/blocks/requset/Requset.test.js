import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { smallResponse } from "data/response";
import Request from "./Request";

afterEach(cleanup);

const requestFrom = {
  type: "RESPONSE_INPUT",
  responseJSON: smallResponse,
};

const changeFormType = jest.fn();

test("customer match snapshot", () => {
  const { asFragment } = render(
    <Request requestFrom={requestFrom} changeFormType={changeFormType} />
  );
  expect(asFragment(<Request />)).toMatchSnapshot();
});

describe("Request ", () => {
  it("should call setResponseJSON ", () => {
    const props = {
      setResponseJSON: jest.fn(),
      requestFrom: {
        type: "RESPONSE_INPUT",
        text: "JSON ответа",
      },
    };

    const { getByText } = render(
      <Request
        setResponseJSON={props.setResponseJSON}
        requestFrom={props.requestFrom}
      />
    );
    fireEvent.click(getByText("Показать"));

    expect(props.setResponseJSON).toHaveBeenCalledTimes(1);
  });
});
