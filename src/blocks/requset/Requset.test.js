import React from "react";
import Request from "./Request";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
} from "@testing-library/react";

import { exportAllDeclaration } from "@babel/types";

import {smallResponse} from 'data/response';

afterEach(cleanup);

const requestFrom = {
  type: `RESPONSE_INPUT`,
  responseJSON: smallResponse
};

const changeFormType = jest.fn();

test(`customer match snapshot`, () => {
  const { asFragment, getByRole } = render(
    <Request
    requestFrom={requestFrom}
      changeFormType={changeFormType}
    />
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

    const { getByText } = render(<Request {...props} />);
    fireEvent.click(screen.getByText("Показать"));

    expect(props.setResponseJSON).toHaveBeenCalledTimes(1);
  });
});
