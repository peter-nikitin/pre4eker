import React from "react";
import { render, cleanup } from "@testing-library/react";
import Placeholders from "./Placeholders";

afterEach(cleanup);

const text = {
  ids: {
    externalId: "top",
  },
  content: [
    {
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
    },
  ],
};

const possibleDiscounts = {
  ids: {
    externalId: "top",
  },
  content: [
    {
      type: "text",
      promotion: {
        ids: {
          mindboxId: 920231738,
          externalId: "promotion-1",
        },
        name: "Новая акция",
        type: "mindbox",
      },
      message: "Ура! У вас скидка!",
    },
    {
      type: "possibleDiscounts",
      promotion: {
        ids: {
          mindboxId: 930293306,
          externalId: "promotion-1",
        },
        name: "Новая акция",
        type: "mindbox",
      },
      possibleDiscounts: {
        discountsCount: 2,
        discount: {
          amount: 20069059.43,
          amountType: "Absolute",
        },
        products: [
          {
            ids: {
              mindboxId: 1086396577,
              default: "1219610192",
              website: "222642819",
              system1c: "797901523",
            },
          },
          {
            ids: {
              mindboxId: 93927243,
              default: "1903350911",
              website: "1772208070",
              system1c: "1753341541",
            },
          },
        ],
      },
    },
  ],
};

describe("Placeholder snapshot", () => {
  it("with message should match snapshot", () => {
    const oneMessage = [text];

    const { asFragment } = render(<Placeholders placeholders={oneMessage} />);
    expect(asFragment(<Placeholders />)).toMatchSnapshot();
  });
  it("with no message should match snapshot", () => {
    const noMessage = [];

    const { asFragment } = render(<Placeholders placeholders={noMessage} />);
    expect(asFragment(<Placeholders />)).toMatchSnapshot();
  });
  it("with discount should match snapshot", () => {
    const oneDiscount = [possibleDiscounts];

    const { asFragment } = render(<Placeholders placeholders={oneDiscount} />);
    expect(asFragment(<Placeholders />)).toMatchSnapshot();
  });

  it("with discount and text should match snapshot", () => {
    const discountAndMessage = [possibleDiscounts, text];

    const { asFragment } = render(
      <Placeholders placeholders={discountAndMessage} />
    );
    expect(asFragment(<Placeholders />)).toMatchSnapshot();
  });
});
