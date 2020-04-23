import {
  changeFormType,
  setResponseJSON,
  setRequestJSON,
} from "./actionCreators";
import * as actions from "./actionTypes";
import * as formTypes from "./formTypes";

import { requestReducer } from "./reducer";

const initialState = {
  type: `RESPONSE_INPUT`,
  responseJSON: {},
  requestJSON: {}
}

test(`action should be CHANGE_REQUEST_FORM`, () => {
  const expectdAction = {
    type: actions.CHANGE_REQUEST_FORM,
    form: formTypes.requestForm.type,
  };

  expect(changeFormType(formTypes.requestForm.type)).toEqual(expectdAction);
});

describe("form type reducer", () => {
  it("should return initial state", () => {
    expect(requestReducer(initialState, {})).toEqual({
      type: "RESPONSE_INPUT",
      responseJSON: {},
      requestJSON: {}
    });
  });

  it("should handle CHANGE_REQUEST_FORM", () => {
    expect(
      requestReducer(initialState, {
        type: "CHANGE_REQUEST_FORM",
        form: "REQUEST_INPUT",
      })
    ).toEqual({
      type: "REQUEST_INPUT",
      responseJSON: {},
      requestJSON: {}
    });
  });

  it("should handle SET_RESPONSE_JSON", () => {
    expect(
      requestReducer(initialState, {
        type: "SET_RESPONSE_JSON",
        data: {status: 200},
      })
    ).toEqual(
      {
        type: "RESPONSE_INPUT",
        responseJSON: {status: 200},
        requestJSON: {}
      }
    );
  });

  it('should handle SET_REQUEST_JSON', () => {
    expect(
      requestReducer(
        {
          type: `RESPONSE_INPUT`,
          responseJSON: {status: 200},
          requestJSON: {}
        }, {
        type: "SET_REQUEST_JSON",
        data: {status: 200},
      })
    ).toEqual(
      {
        type: "RESPONSE_INPUT",
        responseJSON: {status: 200},
        requestJSON: {status: 200}
      }
    );
  });
});
