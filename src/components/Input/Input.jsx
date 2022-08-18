import React from 'react'

const Input = ({tipo, value, onChange}) => {
  return (
    <input type={tipo} value={value} onChange={onChange}></input>
  )
}

export default Input