import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import SidebarMenuItem from './SidebarMenuItem'

export default function Sidebar(props) {

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-close">
          <div 
            className="modal-close-button"
            onClick={() => props.setBar(prevShow => !prevShow)}
          >
            <FontAwesomeIcon icon={faTimes}/>
          </div>
        </div>
        <div className="modal-body">
          <div className="menu">
            <div className="title">
              Menu
            </div>
            <div className="links">
              <SidebarMenuItem id="menu" name="About" link="#about"/>
              <SidebarMenuItem id="menu" name="Projects" link="#projects"/>
              <SidebarMenuItem id="menu" name="Contact" link="#contact"/>
            </div>
          </div>
          <div className="social">
            <div className="title">
              Social
            </div>
            <div className="items">
              <SidebarMenuItem id="social" name="Linked in" link="https://www.linkedin.com/in/jonathan-d-boe"/>
              <SidebarMenuItem id="social" name="GitHub" link="https://github.com/jboe10"/>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="title">
            Get in Touch
          </div>
          <div className="info">
            jdboe2018@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}
