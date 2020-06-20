import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { smallResponse } from "data/response";
import Request from "./Request";

afterEach(cleanup);

const state = {
  type: "RESPONSE_INPUT",
  responseJSON: smallResponse,
};

const changeFormType = jest.fn();

test("Request match snapshot", () => {
  const { asFragment } = render(
    <Request state={state} changeFormType={changeFormType} />
  );
  expect(asFragment(<Request />)).toMatchSnapshot();
});

// describe("Request ", () => {
//   it("should call setResponseJSON ", () => {
//     const props = {
//       setResponseJSON: jest.fn(),
//       state: {
//         type: "RESPONSE_INPUT",
//         text: "JSON ответа",
//       },
//     };

//     const { getByText } = render(
//       <Request
//         setResponseJSON={props.setResponseJSON}
//         state={props.state}
//       />
//     );
//     fireEvent.click(getByText("Рассчитать скидки"));

//     expect(props.setResponseJSON).toHaveBeenCalledTimes(1);
//   });
// });
