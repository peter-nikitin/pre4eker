import React from "react";
import { render, cleanup } from "@testing-library/react";
import PossibleDiscounts from "./PossibleDiscounts";

afterEach(cleanup);

describe("PossibleDiscounts snapshot", () => {
  it("with content should match snapshot", () => {
    const content = {
      type: "possibleDiscounts",
      promotion: {
        ids: {
          mindboxId: 573105704,
          externalId: "promotion-1",
        },
        name: "Новая акция",
        type: "mindbox",
      },
      possibleDiscounts: {
        discountsCount: 2,
        discount: {
          amount: 2848939.94,
          amountType: "Percent",
        },
        products: [
          {
            ids: {
              mindboxId: 1615435128,
              default: "1772822527",
              website: "570162426",
              system1c: "1737590581",
            },
          },
          {
            ids: {
              mindboxId: 161093334,
              default: "1909898548",
              website: "499570319",
              system1c: "1816923791",
            },
          },
        ],
      },
    };

    const placeholderName = "top";
    const { asFragment } = render(
      <PossibleDiscounts content={content} placeholder={placeholderName} />
    );
    expect(asFragment(<PossibleDiscounts />)).toMatchSnapshot();
  });
});
