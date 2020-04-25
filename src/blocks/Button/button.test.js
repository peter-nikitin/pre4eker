import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

test("Button changes color when hovered", () => {
  const { asFragment, getByRole } = render(
    <Button type="DROPDOWN" action={() => null} />
  );

  expect(asFragment(<Button />)).toMatchSnapshot();

  fireEvent.mouseOver(getByRole("button"));
  expect(asFragment(<Button />)).toMatchSnapshot();

  fireEvent.mouseLeave(getByRole("button"));
  expect(asFragment(<Button />)).toMatchSnapshot();
});

test("fire an action on click", () => {
  const action = jest.fn();

  const { getByRole } = render(<Button type="DROPDOWN" action={action} />);

  fireEvent.click(getByRole("button"));
  expect(action).toHaveBeenCalled();
});
