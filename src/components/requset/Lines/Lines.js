import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";

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
      externalSystem: Object.keys(line.product.ids)[0],
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
  const [externalSystem, handleExternalSystemChange] = useState(
    initialLines[0].externalSystem || "website"
  );

  useEffect(() => {
    const linesToState = lines.map(
      (
        {
          lineId,
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
        <Input
          label="Внешняя система"
          name="externalSystem"
          className={style.half}
          value={externalSystem}
          onChange={(e) => {
            setLines(
              lines.map((line) => ({ ...line, externalSystem: e.target.value }))
            );
            handleExternalSystemChange(e.target.value);
          }}
        />
      </div>
      {lines.map((item) => (
        <Line
          line={item}
          key={`line_${item.number}`}
          lines={lines}
          setLines={setLines}
        />
      ))}
      <Button
        action={() => setLines(arrayFunctions.addItem(lines))}
        type="TEXT"
        size="sizeFull"
      >
        + Добавить линию
      </Button>
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
