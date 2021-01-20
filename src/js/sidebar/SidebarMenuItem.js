import React, {useRef} from 'react';
import {TweenMax} from 'gsap';
          
export default function SidebarMenuItem(props) {
  const menu = "menu";
  const social = "social";
  const elementBottom = useRef(null);
  const elementTop = useRef(null)
  const elementBottomSmall = useRef(null);
  const elementTopSmall = useRef(null)

  const rollAnimation = (topStart, topEnd, bottomStart, bottomEnd, bottom, top) => {
    if (bottom && bottom.current && top && top.current) {
      TweenMax.fromTo(top.current,1,{y: topStart}, {y: topEnd})
      TweenMax.fromTo(bottom.current,1,{y: bottomStart}, {y: bottomEnd})
    }
  }
  
  const rollUpSocial = () => {rollAnimation(0, -20, 20, 0, elementBottom, elementTop)};
  const rollDownSocial  = () => { rollAnimation(-20, 0, 0, 20, elementBottom, elementTop)};
  const rollUpMenu  = () => { rollAnimation(0, -100, 100, -100, elementBottom, elementTop)};
  const rollDownMenu  = () => { rollAnimation(-100, 0, -100, 100, elementBottom, elementTop)};
  const rollUpMenuSmall  = () => { rollAnimation(0, -50, 50, -50, elementBottomSmall, elementTopSmall)};
  const rollDownMenuSmall  = () => { rollAnimation(-50, 0, -50, 50, elementBottomSmall, elementTopSmall)};

  if (props.id === social){
    return (
      <div onMouseEnter={rollUpSocial} onMouseLeave={rollDownSocial} className="item">
        <div ref={elementTop} className="name-top"><a href={props.link}>{props.name}</a></div>
        <div ref={elementBottom} className="name-bottom"><a href={props.link}>{props.name}</a></div>
      </div>
    )
  } else if (props.id === menu) {
      return (
        <>
          <div onMouseEnter={rollUpMenu} onMouseLeave={rollDownMenu} className="link">
            <a ref={elementTop} href={props.link}>{props.name}</a>
            <a ref={elementBottom} href={props.link}>{props.name}</a>
          </div>

          <div className="link-menu-small" onMouseEnter={rollUpMenuSmall} onMouseLeave={rollDownMenuSmall}>
            <a ref={elementTopSmall} href={props.link}>{props.name}</a>
            <a ref={elementBottomSmall} href={props.link}>{props.name}</a>
          </div>
        </>
      )
  } else {
    return (
      <>
      </>
    )
  }
}
