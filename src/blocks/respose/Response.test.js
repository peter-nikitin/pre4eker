import React from "react";
import Response from "./Response";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {customer} = response;

test(`customer match snapshot`, () => {
  const {asFragment, getByRole} = render(<Response response={response} />)
  expect(asFragment(<Response />)).toMatchSnapshot();
 
})