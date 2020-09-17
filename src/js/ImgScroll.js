import React from 'react';
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'


export default function ImgScroll() {

  return (
    <div className="img-scroller">
      <img src={one} className="one" alt="ff"/>
      <img src={two} className="two" alt="ff"/>
      <img src={three} className="three" alt="ff"/>
      <img src={four} className="four" alt="ff"/>
      <img src={five} className="five" alt="ff"/>
    </div>
  )
}
