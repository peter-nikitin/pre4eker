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

const defaultRequestForm = {
  requstFormType: `RESPONSE_INPUT`,
  changeFormType: jest.fn(),
};

test(`customer match snapshot`, () => {
  const { asFragment, getByRole } = render(
    <Request requestForm={defaultRequestForm} />
  );
  expect(asFragment(<Request />)).toMatchSnapshot();
});
