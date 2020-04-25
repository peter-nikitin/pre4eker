import React from "react";
import { render, cleanup } from "@testing-library/react";
import Coupon from "./Coupon";

afterEach(cleanup);

const coupon = {
  discountAmountForCurrentOrder: 10528369.9,
  coupon: {
    ids: {
      code: "ABC12345",
    },
    pool: {
      ids: {
        mindboxId: 683788363,
        externalId: "pool-1",
      },
      name: "Новый пул промокодов",
      description: "Пул для новой акции!",
    },
    status: "YetNotActive",
    availableFromDateTimeUtc: "2018-10-22T22:04:40.76Z",
    availableTillDateTimeUtc: "2017-11-20T22:04:40.76Z",
    usedDateTimeUtc: "2019-04-19T22:04:40.76Z",
  },
};

test("customer match snapshot", () => {
  const { asFragment } = render(<Coupon couponInfo={coupon} />);
  expect(asFragment(<Coupon />)).toMatchSnapshot();
});
