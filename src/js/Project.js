import React from 'react'

export default function Project(props) {
  return (
    <div className="project">
      <img src={props.picture} alt="picture"/>
      <div className="project-text">
        <p><span>{props.name}</span> - {props.blurb}</p>
      </div>
    </div>
  )
}
