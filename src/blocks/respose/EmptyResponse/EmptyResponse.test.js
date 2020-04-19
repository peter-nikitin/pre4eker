import React from "react";
import EmptyResponse from "./EmptyResponse";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {lines} = response.order;

test(`EmptyResponse has to match snapshot`, () => {
  const {asFragment, getByRole} = render(<EmptyResponse />)
  expect(asFragment(<EmptyResponse />)).toMatchSnapshot(); 
})