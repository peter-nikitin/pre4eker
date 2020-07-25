import { connect } from "react-redux";

import Main from "./Main";

const mapStateToProps = ({ mainReducer }) => ({
  state: mainReducer,
});

const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;
