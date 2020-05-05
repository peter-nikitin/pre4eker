import React, { useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Button from "src/components/Button/Button";

const JsonInput = loadable(() => import("../JsonInput/JsonInput"));

const ResponseJSON = ({ responseJSON, setJSON }) => {
  const [body, setBody] = useState(JSON.stringify(responseJSON, null, 1));

  return (
    <div>
      <JsonInput
        name="ResponseBody"
        value={body}
        onChange={(value) => setBody(value)}
      />
      <Button
        action={() => setJSON(JSON.parse(body))}
        type="TEXT"
        size="sizeFull"
      >
        Показать
      </Button>
    </div>
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
