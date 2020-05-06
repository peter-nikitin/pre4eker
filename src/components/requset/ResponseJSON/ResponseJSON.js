import React, { useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Button from "src/components/Button/Button";
import Loading from "src/components/Loading/Loading";

import style from "./ResponseJSON.css";

const JsonInput = loadable(() => import("../JsonInput/JsonInput"), {
  fallback: <Loading />,
});

const ResponseJSON = ({ responseJSON, setJSON }) => {
  const [body, setBody] = useState(JSON.stringify(responseJSON, null, 1));

  return (
    <>
      <div className={style.editWrrapper}>
        <JsonInput
          name="ResponseBody"
          value={body}
          onChange={(value) => setBody(value)}
        />
      </div>
      <Button
        action={() => setJSON(JSON.parse(body))}
        type="TEXT"
        size="sizeFull"
      >
        Показать
      </Button>
    </>
  );
};

ResponseJSON.defaultProps = {
  responseJSON: {},
};

ResponseJSON.propTypes = {
  responseJSON: PropTypes.object,
  setJSON: PropTypes.func.isRequired,
};

export default ResponseJSON;
