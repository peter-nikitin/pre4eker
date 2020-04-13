import React from "react";
import Order from "./Order";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'Data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)


const {order} = response;

test(`customer match snapshot`, () => {
  const {asFragment} = render(<Order order={order} />)
  expect(asFragment(<Order />)).toMatchSnapshot()
})