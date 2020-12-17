import React, { useEffect, useRef } from 'react';
import one from '../images/js.png'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'

const BACKGROUNDS = {
  BG_GREEN: "bg-green",
  BG_RED: "bg-red",
  BG_ORANGE: "bg-orange",
  BG_BLUE: "bg-blue",
  BG_PURPLE: "bg-purple",
}

const backgroundArr = [
  BACKGROUNDS.BG_GREEN, 
  BACKGROUNDS.BG_RED,
  BACKGROUNDS.BG_ORANGE,
  BACKGROUNDS.BG_BLUE,
  BACKGROUNDS.BG_PURPLE,
]

function ImgScroll(props, ref) {
  const imgScroller = useRef(null);
  const imgOne = useRef(null);
  const imgTwo = useRef(null);
  const imgThree = useRef(null);
  const imgFour = useRef(null);
  const imgFive = useRef(null);
  const container = useRef(null);
  
  
  useEffect(() => {
    window.addEventListener('scroll', () => { 

      if (container.current !== null){
        const containerHeight = container.current.offsetTop;
        // calculate which image needs to be show and at what % of it needs to be show
        if(containerHeight - 50 <= window.pageYOffset){
          imgScroller.current.className = `img-scroller fixed`
          calculateTopImageAndTopImageHeight2([imgOne,imgTwo,imgThree,imgFour,imgFive], containerHeight, imgScroller.current.offsetHeight)
        } 
        // we stop fixed position because we are nearing top
        if( window.pageYOffset + 50 < container.current.offsetTop) {
          imgScroller.current.className = `img-scroller`
          ref.current.className = `background-trans`

        }
        // we stop fixed position and set bottom img into place for further scrolling
        if(window.pageYOffset - 250 > (container.current.offsetHeight)){
          imgScroller.current.className = `img-scroller bottom`
        }
      }
    }, true)

    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

  function calculateTopImageAndTopImageHeight2(images, imageFixedHeightPos, fixedHeightOfImage) {
  
    const currentImgPos =(window.pageYOffset - imageFixedHeightPos)/fixedHeightOfImage;
    const currentImgNumber = Math.floor(currentImgPos);
    const currentImgRef = images[currentImgNumber];
    const currentImgHeightPercent = (1-(currentImgPos - currentImgNumber));
    const newImageHeightInPx = Math.floor(currentImgHeightPercent * fixedHeightOfImage);
    
    //SET BACKGROUND COLORS
    if(currentImgHeightPercent > .3) {
      ref.current.className = `background-trans ${backgroundArr[currentImgNumber]}`
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
            <h4>Languages</h4>
            <p>TypeScript, JavaScript, NODE js, HTML5, CSS, SCSS/SASS</p>
          </div>
          <div className="skill">
            <h4>Frameworks</h4>
            <p>Express js, React, Aurelia, Django</p>
          </div>
          <div className="skill">
            <h4>Other</h4>
            <p>PostMan/Insomnia, Git, Bootstrap, Google Drive</p>
          </div>
          <div className="skill">
            <h4>Soft Skills</h4>
            <p>ddddd, fffff, eeeeeee, aaaaaaa, ffff</p>
          </div>
          <div className="skill">
            <h4>fffff</h4>
            <p>ffff, aaaaaa, ssssss, aaaaaaa</p>
          </div>
        </div>
        <div className="img-scroller" ref={imgScroller}>
          <div id="one" className="img-wrap one" ref={imgOne} >
            <img src={one}  alt="ff"/>
          </div>
          <div className="img-wrap two" ref={imgTwo}>
            <img src={two} alt="ff"/>
          </div>
          <div className="img-wrap three" ref={imgThree}>
            <img src={three} alt="ff"/>
          </div>
          <div className="img-wrap four" ref={imgFour}>
            <img src={four} className="four" alt="ff"/>
          </div>
          <div className="img-wrap five" ref={imgFive}>
            <img src={five} className="five" alt="ff"/>
          </div>
        </div>
      </div>
    </>
  )
}

const forwardedImgScroll = React.forwardRef(ImgScroll)

export default forwardedImgScroll;
