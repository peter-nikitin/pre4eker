import React from "react";
import PropTypes from "prop-types";

import PossibleDiscounts from "./PossibleDiscounts/PossibleDiscounts";
import Text from "./Text/Text";

const Placeholders = ({ placeholders }) => {
  const drawContent = (content, placeholder) => {
    switch (content.type) {
      case "text":
        return <Text content={content} placeholder={placeholder} />;
      case "possibleDiscounts":
        return (
          <PossibleDiscounts content={content} placeholder={placeholder} />
        );

      default:
        break;
    }
  };

  return (
    <div>
      {placeholders.map((item, i) => (
        <div key={`placeholder_${i}`}>
          {item.content && item.content.map((content, index) => (
            <div key={`content_${index}`}>
              {drawContent(content, item.ids.externalId)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Placeholders.propTypes = {
  placeholders: PropTypes.array,
};

export default Placeholders;
