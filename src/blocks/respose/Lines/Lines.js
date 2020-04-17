import React from 'react'
import PropTypes from 'prop-types'

import Line from "../Line/Line";

const Lines = ({lines}) => {
  return (
    <div>
    <h2>Линии</h2>
    {lines &&
        lines.map((line, i) => <Line key={`line_${i}`} lineInfo={line} />)}
    </div>
  )
}

Lines.propTypes = {

}

export default Lines
