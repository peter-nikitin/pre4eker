import React from "react";
import CustomFields from "./CustomFields";
import { render, fireEvent, waitFor, screen, cleanup, act } from '@testing-library/react' 
import response from 'Data/response'

test(`customfields shoulg match snapshot`, () => {
  const {asFragment, getByRole} = render(<CustomFields data={response.customer.customFields} />)
  expect(asFragment(<CustomFields />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole(`button`))
  expect(asFragment(<CustomFields />)).toMatchSnapshot();
  
  fireEvent.click(screen.getByRole(`button`))
  expect(asFragment(<CustomFields />)).toMatchSnapshot();

})