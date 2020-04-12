import React from "react";
import Customer from "./customer";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'Data/response'
import { exportAllDeclaration } from "../../../../../../../Library/Caches/typescript/3.8/node_modules/@babel/types/lib/index";

afterEach(cleanup)
 
const {customer} = response;

test(`customer match snapshot`, () => {
  const {asFragment} = render(<Customer customer={customer} />)
  expect(asFragment(<Customer />)).toMatchSnapshot()
})