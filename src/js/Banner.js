import React, {useEffect, useRef} from 'react';

export default function Banners(props) {
  const animationEle = useRef(null);

  useEffect(() => {
    if (props.direction) {
      if (props.direction === 'left-to-right') {
        animationEle.current.className = `banner-wrap-left ${props.direction}-${props.speed}`;
      } else {
        animationEle.current.className = `banner-wrap-right ${props.direction}-${props.speed}`;
      }
    } else {
      animationEle.current.className = `banner-wrap-left left-to-right-${props.speed}`;
    }
  }, [props])

  return (
    <section className="scroll-wrap">
      <div ref={animationEle}>
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
    </section>
  )
}
