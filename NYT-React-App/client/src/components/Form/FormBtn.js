import React from 'react'

export const FormBtn = props =>
  <button {...props} style={{ float: 'right' }} >
    {props.children}
  </button>
