import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import response from "data/response";
import CustomFields from "./CustomFields";

test("customfields shoulg match snapshot", () => {
  const { asFragment } = render(
    <CustomFields data={response.customer.customFields} />
  );
  expect(asFragment(<CustomFields />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole("button"));
  expect(asFragment(<CustomFields />)).toMatchSnapshot();

  fireEvent.click(screen.getByRole("button"));
  expect(asFragment(<CustomFields />)).toMatchSnapshot();
});
