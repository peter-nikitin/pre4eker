import React from "react";
import AppliedPromotion from "./AppliedPromotion";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {order} = response;

test(`customer match snapshot`, () => {
  const {asFragment, getByRole} = render(<AppliedPromotion promoInfo={order.appliedPromotions[0]} />)
  expect(asFragment(<AppliedPromotion />)).toMatchSnapshot(); 
})