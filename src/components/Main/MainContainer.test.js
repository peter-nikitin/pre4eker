import * as formTypes from "src/components/requset/formTypes";
import { changeFormType } from "./actionCreators";
import * as actions from "./actionTypes";
import * as actionCreator from "./actionCreators";

import mainReducer from "./reducer";

const initialState = {
  type: "RESPONSE_INPUT",
  responseJSON: {},
  requestJSON: {},
  isLoading: false,
};

test("action should be CHANGE_REQUEST_FORM", () => {
  const expectdAction = {
    type: actions.CHANGE_REQUEST_FORM,
    form: formTypes.requestForm.type,
  };

  expect(changeFormType(formTypes.requestForm.type)).toEqual(expectdAction);
});

describe("form type reducer", () => {
  it("should return initial state", () => {
    expect(mainReducer(initialState, {})).toEqual({
      type: "RESPONSE_INPUT",
      responseJSON: {},
      requestJSON: {},
      isLoading: false,
    });
  });

  it("should handle CHANGE_REQUEST_FORM", () => {
    expect(
      mainReducer(initialState, {
        type: "CHANGE_REQUEST_FORM",
        form: "REQUEST_INPUT",
      })
    ).toEqual({
      type: "REQUEST_INPUT",
      responseJSON: {},
      requestJSON: {},
      isLoading: false,
    });
  });

  it("should handle SET_RESPONSE_JSON", () => {
    expect(
      mainReducer(initialState, {
        type: "SET_RESPONSE_JSON",
        data: { status: 200 },
      })
    ).toEqual({
      type: "RESPONSE_INPUT",
      responseJSON: { status: 200 },
      requestJSON: {},
      isLoading: false,
    });
  });

  it("should handle SET_REQUEST_JSON", () => {
    expect(
      mainReducer(
        {
          type: "RESPONSE_INPUT",
          responseJSON: { status: 200 },
          requestJSON: {},
        },
        {
          type: "SET_REQUEST_JSON",
          data: { status: 200 },
        }
      )
    ).toEqual({
      type: "RESPONSE_INPUT",
      responseJSON: { status: 200 },
      requestJSON: { status: 200 },
    });
  });
});

describe("Toggle loading", () => {
  it("should change loading state to true", () => {
    expect(mainReducer(initialState, actionCreator.toggleLoading())).toEqual({
      type: "RESPONSE_INPUT",
      responseJSON: {},
      requestJSON: {},
      isLoading: true,
    });
  });
  it("should change loading state to false", () => {
    expect(
      mainReducer(
        {
          type: "RESPONSE_INPUT",
          responseJSON: {},
          requestJSON: {},
          isLoading: true,
        },
        actionCreator.toggleLoading()
      )
    ).toEqual({
      type: "RESPONSE_INPUT",
      responseJSON: {},
      requestJSON: {},
      isLoading: false,
    });
  });
});
