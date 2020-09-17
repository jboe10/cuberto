import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
          <div className="social">
            <div className="title">
              Social
            </div>
            <div className="items">
              <div className="item">Facebook</div>
              <div className="item">Behance</div>
              <div className="item">Dribble</div>
              <div className="item">Instagram</div>
              <div className="item">YouTube</div>
              <div className="item">Patreon</div>
            </div>
          </div>
          <div className="menu">
            <div className="title">
              Menu
            </div>
            <div className="links">
              <div className="link"><a href="/">Work</a></div>
              <div className="link"><a href="/">About</a></div>
              <div className="link"><a href="/">Services</a></div>
              <div className="link"><a href="/">Contacts</a></div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="title">
            Get in Touch
          </div>
          <div className="info">
            info@cuberto.com
          </div>
        </div>
      </div>
    </div>
  )
}
