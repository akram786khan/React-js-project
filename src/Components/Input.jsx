import React from 'react'

const Input = ({
  placeholder = "UseName",
  onChnage = () => { },
  type = 'text',
  placeholderColor,
  error = "",
  value,
}) => {
  return (
    <div>
      <input type={type} id={placeholderColor}
        placeholder={placeholder} onChange={(e) => onChnage(e.target.value)}
        style={Styles.inputStyle} value={value} />
      <p style={{ color: "red", fontSize: "17px", marginLeft: "10px" }}>{error}</p>
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