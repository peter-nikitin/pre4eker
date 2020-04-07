import React, { Component } from 'react'
import { connect } from 'react-redux'

import Response from './Response';


const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = {
  
}

export const ResponseContainer = connect(mapStateToProps, mapDispatchToProps)(Response)
