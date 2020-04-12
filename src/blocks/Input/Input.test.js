import React from "react";
import Input from "./Input";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react'

afterEach(cleanup)

test(`the field match snapshot`, () => {
  const {asFragment} = render(<Input label='email' name='email'  />)

  expect(asFragment(<Input />)).toMatchSnapshot()
})