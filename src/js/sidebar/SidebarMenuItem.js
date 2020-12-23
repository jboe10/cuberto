import React, {useEffect, useRef, useState} from 'react';
import {TweenMax} from 'gsap';
          

export default function SidebarMenuItem(props) {
  const menu = "menu";
  const social = "social";
  const elementBottom = useRef(null);
  const elementTop = useRef(null)

  const rollUpSocial = () => {
    if (elementBottom && elementBottom.current && elementTop && elementTop.current) {
      TweenMax.fromTo(elementTop.current,.5,{y: 0}, {y: -20})
      TweenMax.fromTo(elementBottom.current,.5,{y: 20}, {y: 0})
    }
  }

  const rollDownSocial = () => {
    if (elementBottom && elementBottom.current && elementTop && elementTop.current) {
      TweenMax.fromTo(elementTop.current,.5,{y: -20}, {y: 0})
      TweenMax.fromTo(elementBottom.current,.5,{y: 0}, {y: 20})
    }
  }

  const rollUpMenu = () => {
    if (elementBottom && elementBottom.current && elementTop && elementTop.current) {
      TweenMax.fromTo(elementTop.current,.5,{y: 0}, {y: -100})
      TweenMax.fromTo(elementBottom.current,.5,{y: 100}, {y: -100})
    }
  }

  const rollDownMenu = () => {
    if (elementBottom && elementBottom.current && elementTop && elementTop.current) {
      TweenMax.fromTo(elementTop.current,.5,{y: -100}, {y: 0})
      TweenMax.fromTo(elementBottom.current,.5,{y: -100}, {y: 100})
    }
  }

  if (props.id === social){
    return (
      <div onMouseEnter={rollUpSocial} onMouseLeave={rollDownSocial} className="item">
        <div ref={elementTop} className="name-top">{props.name}</div>
        <div ref={elementBottom} className="name-bottom">{props.name}</div>
      </div>
    )
  } else if (props.id === menu) {
      return (
        <div onMouseEnter={rollUpMenu} onMouseLeave={rollDownMenu} className="link">
          <a className="link-top" ref={elementTop} href="/">{props.name}</a>
          <a className="link-bottom" ref={elementBottom} href="/">{props.name}</a>
        </div>
      )
  } else {
    return (
      <>
      </>
    )
  }
}
