import React from "react";
import { render, cleanup } from "@testing-library/react";
import response from "data/response";
import BonusPointsInfo from "./BonusPointsInfo";

afterEach(cleanup);

const { order } = response;

test("customer match snapshot", () => {
  const { asFragment } = render(
    <BonusPointsInfo bonusPointsInfo={order.bonusPointsInfo[0]} />
  );
  expect(asFragment(<BonusPointsInfo />)).toMatchSnapshot();
});
