import React from "react";
import Button from "./Button";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react'

afterEach(cleanup)


test(`Button changes color when hovered`, () => {
  const {asFragment, getByRole} = render(<Button type={`DROPDOWN`} action={() => null} />)
  
  expect(asFragment(<Button />)).toMatchSnapshot();
  
  
  fireEvent.mouseOver(screen.getByRole('button'))
  expect(asFragment(<Button />)).toMatchSnapshot();


  fireEvent.mouseLeave(screen.getByRole('button'))
  expect(asFragment(<Button />)).toMatchSnapshot();

});

test(`fire an action on click`, () => {
  const action = jest.fn();

  const {getByRole} = render(<Button type={`DROPDOWN`} action={action} />)

  fireEvent.click(screen.getByRole(`button`))
  expect(action).toHaveBeenCalled()
})