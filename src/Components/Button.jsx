import React from 'react'



const Button = ({
  title = 'Submit',
  onClick = () => { },
  textColor = "black",
  textSize = "15px",
  backgroundColor,
  style,
}) => {
  return (
    <div style={Styles.container}>
      <button onClick={onClick} style={Styles.btnStyle}><p style={{ color: textColor, fontSize: textSize }}>{title}</p></button>
    </div>
  )
}

export default Button

const Styles = {
  btnStyle: {
    width: "30%",
    height: '5vh'
  },
  container: {
    display: "flex",
    justifyContent: "center"
  }
}