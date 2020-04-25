import React from "react";
import { render, cleanup } from "@testing-library/react";
import AppliedPromotion from "./AppliedPromotion";

afterEach(cleanup);

test("AppliedPromotion match snapshot", () => {
  const promo = {
    type: "earnedBonusPoints",
    coupon: {
      ids: {
        code: "ABC12345",
      },
      pool: {
        ids: {
          mindboxId: 622190754,
          externalId: "pool-1",
        },
        name: "Новый пул промокодов",
        description: "Пул для новой акции!",
      },
    },
    promotion: {
      ids: {
        mindboxId: 1043337289,
        externalId: "promotion-1",
      },
      name: "Новая акция",
      type: "mindbox",
    },
    balanceType: {
      ids: {
        systemName: "ojbLVRsD",
      },
      name: "tmtk1GOB",
    },
    amount: 1180401.2,
    expirationDateTimeUtc: "2017-02-13T22:04:40.76Z",
  };

  const { asFragment } = render(<AppliedPromotion promoInfo={promo} />);
  expect(asFragment(<AppliedPromotion />)).toMatchSnapshot();
});
