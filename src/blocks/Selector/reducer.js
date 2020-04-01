const customer = {
  type: "selector",

  options: {
    mobilePhone: {
      label: "Телефон",
      name: "mobilePhone"
    },
    email: {
      label: "Email",
      name: "email"
    },
    discountCard: {
      label: "Дисконтная карта",
      name: "discountCard"
    },
    mindboxID: {
      label: "Идентификатор Mindbox",
      name: "mindboxID"
    },
    externalID: {
      label: "Внешний идентификатор",
      name: "externalID"
    }
  },

  selected: "email"
};

export const selectorReducer = function(state = customer, action) {
  // console.log(state)
  // console.log(action)
  switch (action.type) {
    case "SELECT":
      return {...state, selected: action.selected}; 
    default:
      return state;
  }
};
