import { connect } from "react-redux";

import Main from "./Main";
import {
  changeFormType,
  setResponseJSON,
  setRequestJSON,
} from "./actionCreators";

const mapStateToProps = ({ mainReducer }) => ({
  requestFrom: mainReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeFormType: (form) => dispatch(changeFormType(form)),
  setResponseJSON: (JSON) => dispatch(setResponseJSON(JSON)),
  setRequestJSON: (JSON) => dispatch(setRequestJSON(JSON)),
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
