import React from 'react'

const Button = ({
    title='Submit',
    onClick = ()=>{},
}) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}

export default Button