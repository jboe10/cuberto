import React from 'react'

export default function Banners(props) {
  return (
    <div className="scroll-wrap">
      <div className="banner-wrap-left left-to-right">
        <div className="banner">
          {props.name}
        </div>
        <div className="banner-stroke">
          {props.name}
        </div>
        <div className="banner">
          {props.name}
        </div>
        <div className="banner-stroke">
          {props.name}
        </div>
        <div className="banner">
          {props.name}
        </div>
        <div className="banner-stroke">
          {props.name}
        </div>
      </div>
    </div>
  )
}
