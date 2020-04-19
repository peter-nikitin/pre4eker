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

afterEach(cleanup);

const requestFromType = {
    type: `RESPONSE_INPUT`,
  };

  const changeFormType = jest.fn();

test(`customer match snapshot`, () => {
  const { asFragment, getByRole } = render(
    <Request requestFromType={requestFromType} changeFormType={changeFormType} />
  );
  expect(asFragment(<Request />)).toMatchSnapshot();
});
