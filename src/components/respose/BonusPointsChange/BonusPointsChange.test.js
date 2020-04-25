import React from "react";
import { render, cleanup } from "@testing-library/react";
import BonusPointsChange from "./BonusPointsChange";

afterEach(cleanup);

const bonusChange = [
  {
    balanceType: {
      ids: {
        systemName: "MBcRZtuf",
      },
      name: "P02zXwLm",
    },
    earnedAmount: 1396638.62,
    spentAmount: 5761799.72,
  },
  {
    balanceType: {
      ids: {
        systemName: "REDNhFOU",
      },
      name: "LE0pZEmG",
    },
    earnedAmount: 20955125.72,
    spentAmount: 10868072.91,
  },
];

test("bonus point change match snapshot", () => {
  const { asFragment } = render(
    <BonusPointsChange bonusPointsChanges={bonusChange} />
  );
  expect(asFragment(<BonusPointsChange />)).toMatchSnapshot();
});
