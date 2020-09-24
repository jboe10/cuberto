import React, { useState, useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './scss/main.sass'
import Hero from './js/Hero';
import Banners from './js/Banners';
import Sidebar from './js/Sidebar';

function App() {
  let statementEle = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  let sideModal; 

  useEffect(() => {
    TweenMax.fromTo(statementEle, 1.2, {y: 30} , {y:0, delay: .75})
  }, [])

  if (showSidebar) {
    sideModal = <Sidebar setBar = {setShowSidebar}/>
  } else {
    sideModal = null;
  }

  return (
    <> 
    <div className="App">
      <div className="head-wrap">
        <div className="logo-navbar">
          cuberto
        </div>
        <div className="navbar">
          <div className="showreel-navbar">
            our showreel
          </div>
          <div className="menu-navbar">
            menu
          </div>
          <div 
            className="bar-navbar"
            onClick={() => setShowSidebar(prevShow => !prevShow)}
          >
            <FontAwesomeIcon icon={faBars}/>
          </div>
        </div>
      </div>
      <div className="body-wrap">
        <div className="hero-wrap">
          <Hero/>
        </div>
        <div 
          ref = {statemnt => { statementEle = statemnt }}
          className="hero-msg-wrap"
        >
          <p>
            Leading Digital agency with solid design and developemnt<br/>
            expertise. We build readymade websites, mobile<br/>
            application, and elaborate online buisnesses services.
          </p>
        </div>
      </div>
      <Banners name="Strategy"/>
      <Banners name="Design"/> 
      <Banners name="Development"/>
      <Banners name="Marketing"/>
    </div>
    {sideModal}
    </>
  );
}

export default App;
