import React from "react";
import { render } from "@testing-library/react";
import response from "data/response";
import Contact from "./Contact";

const {
  mobilePhone,
  pendingMobilePhone,
  isMobilePhoneInvalid,
  isMobilePhoneConfirmed,
} = response.customer;

test("Phone should match snapshot", () => {
  const { asFragment } = render(
    <Contact
      label="Телефон"
      main={mobilePhone}
      Invalid={isMobilePhoneInvalid}
      Confirmed={isMobilePhoneConfirmed}
      pending={pendingMobilePhone}
    />
  );

  expect(asFragment(<Contact />)).toMatchSnapshot();
});
