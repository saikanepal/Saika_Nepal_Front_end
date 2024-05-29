import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "block",backgroundColor:'red' }} // Customize the styles here
    onClick={onClick}
  />
  )
}

export default NextArrow