export const changeFormType = (form) => ({ type: "CHANGE_REQUEST_FORM", form });
export const setResponseJSON = (data) => ({ type: "SET_RESPONSE_JSON", data });
export const setRequestJSON = (data) => ({ type: "SET_REQUEST_JSON", data });
export const toggleLoading = () => ({ type: "TOGGLE_LOADING" });
export const fetchResponse = (data) => (dispatch) => {
  dispatch(setRequestJSON({ ...data, key: "" }));

  if (typeof data.endpoint !== "undefined") {
    dispatch(toggleLoading());
    fetch("/prechek", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(setResponseJSON(response));
        dispatch(toggleLoading());
      })
      .catch((err) => setResponseJSON(err));
  }
};
