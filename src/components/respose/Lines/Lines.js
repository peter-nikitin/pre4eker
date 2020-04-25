import React from "react";
import PropTypes from "prop-types";

import Line from "../Line/Line";
import shortid from "shortid";

const Lines = ({ lines }) => {
  const linesWithIDs = lines.map((line) => ({
    ...line,
    id: shortid.generate(),
  }));

  return (
    <div>
      <h2>Линии</h2>
      {lines &&
        linesWithIDs.map((line) => <Line key={line.id} lineInfo={line} />)}
    </div>
  );
};

Lines.propTypes = {
  lines: PropTypes.array.isRequired,
};

export default Lines;
