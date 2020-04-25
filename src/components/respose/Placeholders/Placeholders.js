import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import PossibleDiscounts from "./PossibleDiscounts/PossibleDiscounts";
import Text from "./Text/Text";

const Placeholders = ({ placeholders }) => {
  const drawContent = (content, placeholderName) => {
    switch (content.type) {
      case "text":
        return <Text content={content} placeholder={placeholderName} />;
      case "possibleDiscounts":
        return (
          <PossibleDiscounts content={content} placeholder={placeholderName} />
        );

      default:
        break;
    }
    return false;
  };

  const placeholdersWithIDs = placeholders.map((item) => ({
    ...item,
    id: shortid.generate(),
  }));

  return (
    <div>
      {placeholders &&
        placeholdersWithIDs.map((item) => (
          <div key={item.id}>
            {item.content &&
              item.content.map((content) => (
                <div key={shortid.generate()}>
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
Placeholders.defaultProps = {
  placeholders: [],
};

export default Placeholders;
