import { connect } from "react-redux";

import Request from "./Request";
import {
  changeFormType,
  setResponseJSON,
  fetchResponse,
  setRequestJSON,
  setRequestXML,
  setResponseXML,
} from "src/components/Main/actionCreators";

const mapStateToProps = ({ mainReducer }) => ({
  responseJSON: mainReducer.responseJSON,
  responseXML: mainReducer.requestXML,
  requestJSON: mainReducer.requestJSON,
  requestXML: mainReducer.requestXML,
  type: mainReducer.type,
});

const mapDispatchToProps = (dispatch) => ({
  changeFormType: (form) => dispatch(changeFormType(form)),
  setResponseJSON: (JSON) => dispatch(setResponseJSON(JSON)),
  fetchResponse: (JSON) => dispatch(fetchResponse(JSON)),
  setRequestJSON: (JSON) => dispatch(setRequestJSON(JSON)),
  setRequestXML: (XML) => dispatch(setRequestXML(XML)),
  setResponseXML: (XML) => dispatch(setResponseXML(XML)),
});

const RequestContainer = connect(mapStateToProps, mapDispatchToProps)(Request);
export default RequestContainer;
