import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Project from './Project'
import genesisVision from '../images/genesisVisionSmall.png'
import nanaAsia from '../images/nanaAsiaSmall.png'
import riydah from '../images/riydahSmall.png'
import sleepiest from '../images/sleepiestSmall.png'
import uLesson from '../images/ulessonSmall.png'

export default function FeaturedProjects() {
  return (
    <div className="featured-projects">
      <Project
        name="Riyadh"
        picture={riydah}
        blurb="Official website of Riydah, Saudi Arabia's capital."
      />
      <Project
        name="Nana Asia"
        picture={nanaAsia}
        blurb="Asia's digital magazine, powered by women."
      /> 
      <Project
        name="Sleepiest"
        picture={sleepiest}
        blurb="Sleep app helps millions, fall asleep every night."
      /> 
      <Project
        name="Genesis Vision"
        picture={genesisVision}
        blurb="Private trust management and trading platform"
      /> 
      <Project
        name="uLesson"
        picture={uLesson}
        blurb="Online platform for distance learning."
      />
    </div>
  )
}
