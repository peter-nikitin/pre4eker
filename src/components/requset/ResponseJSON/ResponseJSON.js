import React, { useState } from "react";
import PropTypes from "prop-types";

import AceEditor from "react-ace";

import "brace/mode/json";
import "brace/theme/xcode";

import Button from "src/components/Button/Button";

const ResponseJSON = ({ responseJSON, setJSON }) => {
  const [body, setBody] = useState(JSON.stringify(responseJSON, null, 1));
  return (
    <div>
      <AceEditor
        name="ResponseBody"
        mode="json"
        theme="xcode"
        value={body}
        onChange={(value) => setBody(value)}
        height="68vh"
        width="100%"
        wrapEnabled
        placeholder="Тело ответа"
        highlightActiveLine={false}
        setOptions={{
          showLineNumbers: false,
          tabSize: 2,
        }}
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
