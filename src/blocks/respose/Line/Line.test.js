import React from "react";
import Line from "./Line";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {lines} = response.order;

test(`Line has to match snapshot`, () => {
  const {asFragment, getByRole} = render(<Line lineInfo={lines[0]} />)
  expect(asFragment(<Line />)).toMatchSnapshot(); 
})