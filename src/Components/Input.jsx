import React from 'react'

const Input = ({
  placeholder = "UseName",
  onChnage = () => { },
  type = 'text',
  textColor
}) => {
  return (
    <div>
      <input type={type} id={textColor}
        placeholder={placeholder} onChange={onChnage}
        style={Styles.inputStyle} />
    </div>
  )
}

export default Input

const Styles = {
  inputStyle: {
    width: "95%",
    height: '8vh',
    outline: "none",
    padding: '10px',
    margin: "10px",
    fontSize: "20px",
    color: "blue"
  }
}