import React from 'react'

const Input = ({
    placeholder="UseName",
    onChnage = () => {},
    type='text'
}) => {
  return (
    <input type={type}  placeholder={placeholder} onChange={onChnage}/>
  )
}

export default Input