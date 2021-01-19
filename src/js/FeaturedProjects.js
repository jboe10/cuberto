import React from 'react'
import Project from './Project'
import cultish from '../images/cultishSmall.png'
import surfline from '../images/surflineSmall.png'
import gitSmall from '../images/git2.svg'
import rct from '../images/rct.jpg'

export default function FeaturedProjects() {
  return (
    <div className="featured-projects">
      <Project
        name="Surfline"
        picture={surfline}
        blurb="React, SASS, Javascript, HTML, Mongoose, Mongodb, Heroku, Node.js, Express"
        link="https://stormy-thicket-96949.herokuapp.com/"
      />
      <Project
        name="Cultish"
        picture={cultish}
        blurb=" React, Javascript, SASS, HTML, Heroku"
        link="https://secret-river-01127.herokuapp.com/"
      /> 
      <Project
        name="GitForWindows"
        picture={gitSmall}
        blurb="HTML, CSS, PHP, Heroku"
        link="https://gitwindows.herokuapp.com/"
      /> 
      <Project
        name="My Portfolio"
        picture={rct}
        blurb="React, Javascript, SASS, HTML, GitHub Pages"
        link="/"
      /> 
      {/* <Project
        name="uLesson"
        picture={uLesson}
        blurb="Online platform for distance learning."
      /> */}
    </div>
  )
}
