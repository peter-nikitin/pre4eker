import React from "react";
import Coupons from "./Coupons";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {order} = response;

test(`customer match snapshot`, () => {
  const {asFragment, getByRole} = render(<Coupons couponInfo={order.couponsInfo[0]} />)
  expect(asFragment(<Coupons />)).toMatchSnapshot(); 
})