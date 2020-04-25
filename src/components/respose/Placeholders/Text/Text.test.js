import React from "react";
import { render, cleanup } from "@testing-library/react";
import Text from "./Text";

afterEach(cleanup);

describe("Text snapshot", () => {
  it("with content should match snapshot", () => {
    const textContent = {
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

    const placeholder = "top";
    const { asFragment } = render(
      <Text content={textContent} placeholder={placeholder} />
    );
    expect(asFragment(<Text />)).toMatchSnapshot();
  });
});
