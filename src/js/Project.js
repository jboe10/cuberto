import React from 'react'

export default function Project(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <img src={props.picture} alt="project"/>
        <div className="project-text">
          <p><span>{props.name}</span> - {props.blurb}</p>
        </div>
      </a>
    </div>
  )
}
