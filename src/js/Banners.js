import React, {useState, useEffect, useRef} from 'react';

export default function Banners(props) {
  const [animation, setAnimation] = useState("");
  const animationEle = useRef(null);
  useEffect(() => {
    animationEle.current.className = `${animationEle.current.className} left-to-right-${props.speed}`;
    // TODO:
    // event listener for scrolling
    // are we scrolling thru the div?
      // are we scrolling up or down thru the div?
        // up ? left - to - right
        // down? right - to - left
  }, [])

  useEffect(() => {

  }, [])

  return (
    <div className="scroll-wrap">
      <div ref={animationEle} className="banner-wrap-left">
        <div className="banner">
          {props.name}
        </div>
        <div className="banner-stroke">
          {props.name}
        </div>
        <div className="banner">
          {props.name}
        </div>
        <div className="banner-stroke">
          {props.name}
        </div>
        <div className="banner">
          {props.name}
        </div>
        <div className="banner-stroke">
          {props.name}
        </div>
      </div>
    </div>
  )
}
