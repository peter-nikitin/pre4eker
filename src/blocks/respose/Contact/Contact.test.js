import React from "react";
import Contact from "./Contact";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
} from "@testing-library/react";
import response from "data/response";


const {
  mobilePhone,
  pendingMobilePhone,
  isMobilePhoneInvalid,
  isMobilePhoneConfirmed,
} = response.customer;


test(`Phone should match snapshot`, () => {
  const { asFragment } = render(
    <Contact
      label='Телефон'
      main={mobilePhone}
      Invalid={isMobilePhoneInvalid}
      Confirmed={isMobilePhoneConfirmed}
      pending={pendingMobilePhone}
    />
  );

  expect(asFragment(<Contact />)).toMatchSnapshot()
});
