import React, { useEffect, useRef } from 'react';
import {TweenMax} from 'gsap';

export default function Hero() {
  let subTitleEle = useRef(null);
  let titleEle1 = useRef(null);
  let titleEle2 = useRef(null);
  let titleEle3 = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(subTitleEle, .5, {y: 30} , {y:0})
    TweenMax.fromTo(titleEle1,1.2,{y: 130}, {y: 0, delay: .5})
    TweenMax.fromTo(titleEle2,1.2,{y: 130}, {y: 0, delay: .65})
    TweenMax.fromTo(titleEle3,1.2,{y: 130}, {y: 0, delay: .75})
  }, [])

  return (
    <section className="hero">
      <div className="titles">
        <div className="hero-sub-wrap">
          <div 
            ref = {sub => {subTitleEle = sub}}
            className="hero-subtitle"
          >
              We make it happen
          </div>
        </div>
        <div 
         
          className="hero-title">
          <div 
            ref = {title => {titleEle1 = title}}
            className="hero-title-item"
          >
            <a href="/">
              Websites
            </a>
          </div>
          <div 
            ref = {title => {titleEle2 = title}}
            className="hero-title-item"
          >
            <a href="/">
              Apps
            </a>
          </div> 
          <div 
            ref = {title => {titleEle3 = title}}
            className="hero-title-item"
          >
            <a href="/">
              Branding
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
