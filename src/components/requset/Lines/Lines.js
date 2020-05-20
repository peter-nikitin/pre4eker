import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";

import arrayFunctions from "../arrayFunctions";

import style from "./Line.css";
import Line from "./Line";

const Lines = ({ setRequestJSON, requestJSON }) => {
  const { body } = requestJSON;
  let initialOrder;
  let initialLines;
  if (typeof body !== "undefined") {
    initialOrder = body.order;
  }

  if (
    typeof initialOrder !== "undefined" &&
    typeof initialOrder.lines !== "undefined"
  ) {
    initialLines = initialOrder.lines.map((line, index) => ({
      number: index + 1,
      lineId: line.lineId,
      externalSystem: Object.keys(line.product.ids)[0] || "Website",
      price: line.basePricePerItem,
      productId: Object.values(line.product.ids)[0],
      quantity: line.quantity,
      status: line.status.ids.externalId,
      customFields: line.customFields,
      requestedPromotions: line.requestedPromotions,
    }));
  } else {
    initialLines = [{ number: 1 }];
  }

  const [lines, setLines] = useState([...initialLines]);
  const [selectedLine, changeSelectedLine] = useState(1);
  const currentLine = lines.find((item) => item.number === selectedLine);

  useEffect(() => {
    const linesToState = lines.map(
      (
        {
          lineId,
          externalSystem,
          price,
          productId,
          quantity,
          status,
          requestedPromotions,
          customFields,
        },
        index
      ) => ({
        product: {
          ids: {
            [externalSystem]: productId,
          },
        },
        lineId,
        lineNumber: index + 1,
        quantity,
        basePricePerItem: price,
        customFields,
        requestedPromotions,
        status: {
          ids: {
            externalId: status,
          },
        },
      })
    );

    if (linesToState.length > 0) {
      setRequestJSON({
        ...requestJSON,
        body: {
          ...body,
          order: {
            ...initialOrder,
            lines: [...linesToState],
          },
        },
      });
    }
  }, [lines]);

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
  requestJSON: PropTypes.object,
  setRequestJSON: PropTypes.func,
};
Lines.defaultProps = {
  requestJSON: {},
  setRequestJSON: () => ({}),
};

export default Lines;
