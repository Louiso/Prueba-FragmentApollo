import React from 'react'
const MaterialIcon = ({type, ...props}) => (
  <i className="material-icons" {...props}>{type}</i>
)

export default MaterialIcon