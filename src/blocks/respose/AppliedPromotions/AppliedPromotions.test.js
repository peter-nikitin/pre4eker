import React from "react";
import AppliedPromotions from "./AppliedPromotions";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {order} = response;

test(`customer match snapshot`, () => {
  const {asFragment, getByRole} = render(<AppliedPromotions promoInfo={order.appliedPromotions[0]} />)
  expect(asFragment(<AppliedPromotions />)).toMatchSnapshot(); 
})