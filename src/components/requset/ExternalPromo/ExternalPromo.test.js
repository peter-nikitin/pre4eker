import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ExternalPromo from "./ExternalPromo";

describe("ExternalPromo ", () => {
  describe("with empty body", () => {
    const body = {};
    const setBody = jest.fn();
    const typeOfParrent = "order";

    it("should render only add btn ", () => {
      const { container } = render(
        <ExternalPromo
          body={body}
          setBody={setBody}
          typeOfParrent={typeOfParrent}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("should handle click on add btn ", () => {
      render(
        <ExternalPromo
          body={body}
          setBody={setBody}
          typeOfParrent={typeOfParrent}
        />
      );
      fireEvent.click(screen.getByRole("button"));
      expect(setBody).toHaveBeenCalledTimes(1);
    });

    it("should render 1 element after click on add btn ", () => {
      const { container } = render(
        <ExternalPromo
          body={body}
          setBody={setBody}
          typeOfParrent={typeOfParrent}
        />
      );
      fireEvent.click(screen.getByRole("button"));
      expect(container).toMatchSnapshot();
    });
  });

  describe("with 1 promo", () => {
    const body = {
      requestedPromotions: [
        {
          type: "disCountType",
          promotion: {
            ids: {
              externalId: 1,
            },
            type: "mindbox",
          },
          amount: 1,
        },
      ],
    };
    const setBody = jest.fn();
    const typeOfParrent = "order";

    it("should render 1 element", () => {
      const { container } = render(
        <ExternalPromo
          body={body}
          setBody={setBody}
          typeOfParrent={typeOfParrent}
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
