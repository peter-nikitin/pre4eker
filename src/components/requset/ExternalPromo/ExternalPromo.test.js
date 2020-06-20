import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ExternalPromo from "./ExternalPromo";

describe("ExternalPromo ", () => {
  describe("with empty body", () => {
    const body = {};
    const setBody = jest.fn();
    const typeOfParent = "order";

    it("should render only add btn ", () => {
      const { container } = render(
        <ExternalPromo
          body={body}
          setBody={setBody}
          typeOfParent={typeOfParent}
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("should handle click on add btn ", () => {
      render(
        <ExternalPromo
          body={body}
          setBody={setBody}
          typeOfParent={typeOfParent}
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
          typeOfParent={typeOfParent}
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
              externalId: "1",
            },
            type: "mindbox",
          },
          amount: "1",
        },
      ],
    };
    const setBody = jest.fn();
    const typeOfParent = "order";

    it("should render 1 element", () => {
      const { container } = render(
        <ExternalPromo
          body={body}
          setBody={setBody}
          typeOfParent={typeOfParent}
        />
      );
      expect(container).toMatchSnapshot();
    });
  });
});

describe("External promo", () => {
  it("should handle adding 1 element, choosing types, handling changing in inputs and send to redux correct object", () => {
    const body = {};
    const setBody = jest.fn();
    const typeOfParent = "order";

    const form = render(
      <ExternalPromo
        body={body}
        setBody={setBody}
        typeOfParent={typeOfParent}
      />
    );
    // add empty external promo
    fireEvent.click(form.getByRole("button"));

    // choose types
    fireEvent.click(form.getByText("Mindbox"));
    fireEvent.click(form.getByText("Скидка"));

    // input values
    fireEvent.change(form.getByLabelText("ИД акции"), {
      target: { value: 10 },
    });
    fireEvent.change(form.getByLabelText("Сумма"), {
      target: { value: 10 },
    });

    expect(setBody).toHaveBeenCalledWith({
      requestedPromotions: [
        {
          type: "discount",
          promotion: {
            ids: {
              externalId: "10",
            },
            type: "mindbox",
          },
          amount: "10",
        },
      ],
    });
  });
});
