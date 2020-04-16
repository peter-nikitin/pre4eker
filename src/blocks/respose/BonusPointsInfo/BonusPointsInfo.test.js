import React from "react";
import BonusPointsInfo from "./BonusPointsInfo";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {order} = response;

test(`customer match snapshot`, () => {
  const {asFragment, getByRole} = render(<BonusPointsInfo bonusPointsInfo={order.bonusPointsInfo[0]} />)
  expect(asFragment(<BonusPointsInfo />)).toMatchSnapshot(); 
})