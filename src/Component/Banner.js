import React from 'react'

const Banner = (props) => {
  return (
    <div>
      <div
      className="banner"
      style={{
        background: `url(${props.backgroundImage}) center/cover no-repeat`,
        height: "500px",
        position: "relative"
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
          color: "#fff"
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
    </div>
  )
}

export default Banner
