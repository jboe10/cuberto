import React from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import './scss/main.sass'
import Hero from './js/Hero';
import Banners from './js/Banners';
import ImgScroll from './js/ImgScroll';

function App() {
  return (
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
          <div className="bar-navbar">
            <FontAwesomeIcon icon={faBars}/>
          </div>
        </div>
      </div>
      <div className="body-wrap">
        <Hero/>
        <p>
          Leading Digital agency with solid design and developemnt<br/>
          expertise. We build readymade websites, mobile<br/>
          application, and elaborate online buisnesses services.
        </p>
      </div>
      <Banners name="Strategy"/>
      <Banners name="Design"/> 
      <Banners name="Development"/>
      <Banners name="Marketing"/>
      <ImgScroll/>
      <Hero/>
      <Hero/>
      <Hero/>

    </div>
  );
}

export default App;
