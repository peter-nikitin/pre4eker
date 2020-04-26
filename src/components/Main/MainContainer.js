import { connect } from "react-redux";

import Main from "./Main";
import {
  changeFormType,
  setResponseJSON,
  fetchResponse,
} from "./actionCreators";

const mapStateToProps = ({ mainReducer }) => ({
  requestFrom: mainReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFormType: (form) => dispatch(changeFormType(form)),
  setResponseJSON: (JSON) => dispatch(setResponseJSON(JSON)),
  fetchResponse: (JSON) => dispatch(fetchResponse(JSON)),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
