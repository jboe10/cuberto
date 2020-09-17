import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './scss/main.sass'
import Hero from './js/Hero';
import Banners from './js/Banners';
import ImgScroll from './js/ImgScroll';
import Sidebar from './js/Sidebar';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  let sideModal; 

  useEffect(() => {
    console.log(showSidebar)
  }, [showSidebar])

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
          Cuberto
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
        <div className="hero-msg-wrap">
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
