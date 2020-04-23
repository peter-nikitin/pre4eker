import React from "react";
import Text from "./Text";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
  act,
} from "@testing-library/react";
import response, {
  noLines,
  noResponse,
  noCustomer,
  noOrder,
} from "data/response";

afterEach(cleanup);

describe("Text snapshot", () => {
  it("with content should match snapshot", () => {
    const content = {
      type: "text",
      promotion: {
        ids: {
          mindboxId: 1672736105,
          externalId: "promotion-1",
        },
        name: "Новая акция",
        type: "mindbox",
      },
      message: "Ура! У вас скидка!",
    };

    const { asFragment } = render(<Text content={content} placeholder='top'/>);
    expect(asFragment(<Text />)).toMatchSnapshot();
  });
});
