import React from "react";
import BonusPointsChange from "./BonusPointsChange";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'data/response'
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup)
 
const {order} = response;

test(`customer match snapshot`, () => {
  const {asFragment, getByRole} = render(<BonusPointsChange bonusPointsChanges={order.bonusPointsChanges} />)
  expect(asFragment(<BonusPointsChange />)).toMatchSnapshot(); 
})