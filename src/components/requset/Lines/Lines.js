import React from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";

import arrayFunctions from "../arrayFunctions";

import style from "./Line.css";
import Line from "./Line";

const Lines = ({ lines, setLines, selectedLine, changeSelectedLine }) => {
  const currentLine = lines.find((item) => item.number === selectedLine);

  return (
    <div>
      <div className={style.inline}>
        <h2 className={style.h2}>Линии</h2>
        <div className={style.inline}>
          <div className={`${style.lineSelector}`}>
            {lines.map((item, index) => (
              <Button
                key={item.number}
                type="TEXT"
                action={() => changeSelectedLine(item.number)}
                active={item.number === selectedLine}
              >
                {String(index + 1)}
              </Button>
            ))}
          </div>

          <div className={style.lineAddRemove}>
            <Button
              action={() => setLines(arrayFunctions.addItem(lines))}
              type="ADD"
            />

            <Button
              action={() => {
                changeSelectedLine(selectedLine - 1);
                setLines(arrayFunctions.removeItem(lines, currentLine));
              }}
              type="REMOVE"
            />
          </div>
        </div>
      </div>
      <Line line={currentLine} lines={lines} setLines={setLines} />
    </div>
  );
};

Lines.propTypes = {
  lines: PropTypes.array,
  setLines: PropTypes.func,
  selectedLine: PropTypes.number,
  changeSelectedLine: PropTypes.func,
};
Lines.defaultProps = {
  lines: [],
  setLines: () => ({}),
  selectedLine: 1,
  changeSelectedLine: () => ({}),
};

export default Lines;
