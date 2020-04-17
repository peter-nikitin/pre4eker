const defaultRequestForm = {
  type: `RESPONSE_INPUT`,
  JSON: ''
}

export const requestFormReducer = function (state = defaultRequestForm, action) {
  switch (action.type) {
    case 'CHANGE_REQUEST_FORM': 
      return {...state, type: action.form }
    case 'SET_RESPONSE_JSON':
      return {...state, responseJSON: action.JSON}
    case 'SET_REQUEST_JSON':
      return {...state, requestJSON: action.JSON}
    default:
      return state;
  }
}