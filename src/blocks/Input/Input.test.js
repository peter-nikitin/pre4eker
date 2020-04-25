import React from "react";
import { render, cleanup } from "@testing-library/react";
import Input from "./Input";

afterEach(cleanup);

test("the field match snapshot", () => {
  const handleInputChange = jest.fn();
  const field = "email";
  const { asFragment } = render(
    <Input label={field} name={field} onChange={handleInputChange} />
  );

  expect(asFragment(<Input />)).toMatchSnapshot();
});
