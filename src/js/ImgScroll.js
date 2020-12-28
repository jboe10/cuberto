import React, { useEffect, useRef } from 'react';
import genesisVision from '../images/genesisVision.jpg'
import nanaAsia from '../images/nanaAsia.jpg'
import riydah from '../images/riydah.jpg'
import sleepiest from '../images/sleepiest.jpg'
import uLesson from '../images/ulesson.jpg'

const BACKGROUNDS = {
  BG_GREEN: "bg-green",
  BG_RED: "bg-red",
  BG_ORANGE: "bg-orange",
  BG_BLUE: "bg-blue",
  BG_PURPLE: "bg-purple",
  BG_TAN: "bg-tan"
}

const backgroundArr = [
  BACKGROUNDS.BG_TAN,
  BACKGROUNDS.BG_RED,
  BACKGROUNDS.BG_GREEN, 
  BACKGROUNDS.BG_BLUE,
  BACKGROUNDS.BG_ORANGE,
]

function ImgScroll(props, ref) {
  const imgScroller = useRef(null);
  const imgOne = useRef(null);
  const imgTwo = useRef(null);
  const imgThree = useRef(null);
  const imgFour = useRef(null);
  const imgFive = useRef(null);
  const container = useRef(null);
  const margin = 50;
  
  useEffect(() => {
    const imageScroll = () => {
      if (container.current !== null){
        const containerHeight = container.current.offsetTop;
        // calculate which image needs to be show and at what % of it needs to be show
        if(containerHeight - margin <= window.pageYOffset){
          imgScroller.current.className = `img-scroller fixed`
          calculateTopImageAndTopImageHeight([imgOne,imgTwo,imgThree,imgFour,imgFive], containerHeight, imgScroller.current.offsetHeight)
        } 
        // we stop fixed position because we are nearing top
        if( window.pageYOffset + margin < container.current.offsetTop) {
          imgScroller.current.className = `img-scroller`
          ref.current.className = `background-trans`

        }
        // we stop fixed position and set bottom img into place for further scrolling
        if(window.pageYOffset - imgFive.current.offsetHeight > (container.current.offsetHeight)){
          imgScroller.current.className = `img-scroller bottom`
        }
      }
    }

    window.addEventListener('scroll', imageScroll);

    return () => {
      window.removeEventListener("scroll", imageScroll);
    }
  })

  function calculateTopImageAndTopImageHeight(images, imageFixedHeightPos, fixedHeightOfImage) {
  
    const currentImgPos =(window.pageYOffset - imageFixedHeightPos)/fixedHeightOfImage;
    const currentImgNumber = Math.floor(currentImgPos);
    const currentImgRef = images[currentImgNumber];
    const currentImgHeightPercent = (1-(currentImgPos - currentImgNumber));
    const newImageHeightInPx = Math.floor(currentImgHeightPercent * fixedHeightOfImage);
    
    //SET BACKGROUND COLORS
    if(currentImgHeightPercent < .4) {
      ref.current.className = `background-trans ${backgroundArr[currentImgNumber+1]}`
    }

    // SET IMAGE HEIGHTS
    for (let i = 0; i < images.length -1; i++) {
      if(images[i] !== null) {
        if(i < currentImgNumber){
          images[i].current.style.height = `0px`;
        }
        if(i >= currentImgNumber+1){
          images[i].current.style.height = `${fixedHeightOfImage}px`;
        }
        if(i !== images.length - 1){
          if(images[i] === currentImgRef){
            currentImgRef.current.style.height = `${newImageHeightInPx}px`;
          }
        }
      }
    }
  }

  return (
    <>
      <h2>
        featured<br/>
        <span className="stroke">
          projects
        </span>
      </h2>
      <div className="img-scroll-section" ref={container}>
        <div className="quotes">
          <div className="skill">
            <h4>Riyadh</h4>
            <p>
              Official website of Riydah,<br/>
              Saudi Arabia's capital.
            </p>
             <span>design, development, product</span>
          </div>
          <div className="skill">
            <h4>Nana Asia</h4>
            <p>
              Asia's digital magazine,<br/>
              powered by women.
            </p>
            <span>web, design, development</span>
          </div>
          <div className="skill">
            <h4>Sleepiest</h4>
            <p>
              Sleep app helps millions,
              fall asleep every night.
            </p>
            <span>branding, design, mobile, product</span>
          </div>
          <div className="skill">
            <h4>Genesis Vision</h4>
            <p>
              Private Trust Managment<br/>
              and trading platform.
            </p>
            <span>branding, design, experience, product</span>
          </div>
          <div className="skill">
            <h4>uLesson</h4>
            <p>
              Online platform<br/>
              for distance learning.
            </p>
            <span>web, mobile, product</span>
          </div>
        </div>
        <div className="img-scroller" ref={imgScroller}>
          <div id="one" className="img-wrap one" ref={imgOne} >
            <img src={riydah}  alt="ff"/>
          </div>
          <div className="img-wrap two" ref={imgTwo}>
            <img src={nanaAsia} alt="ff"/>
          </div>
          <div className="img-wrap three" ref={imgThree}>
            <img src={sleepiest} alt="ff"/>
          </div>
          <div className="img-wrap four" ref={imgFour}>
            <img src={genesisVision} className="four" alt="ff"/>
          </div>
          <div className="img-wrap five" ref={imgFive}>
            <img src={uLesson} className="five" alt="ff"/>
          </div>
        </div>
      </div>
    </>
  )
}

const forwardedImgScroll = React.forwardRef(ImgScroll)
export default forwardedImgScroll;
