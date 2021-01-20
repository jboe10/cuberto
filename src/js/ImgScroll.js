import React, { useEffect, useRef } from 'react';
import srfline from '../images/surfline.jpg'
import cultish from '../images/cultish.jpeg'
import git from '../images/git.svg'
import rct from '../images/rtt.jpg'



const BACKGROUNDS = {
  BG_GREEN: "bg-green",
  BG_RED: "bg-red",
  BG_ORANGE: "bg-orange",
  BG_BLUE: "bg-blue",
  BG_PURPLE: "bg-purple",
  BG_TAN: "bg-tan"
}

const backgroundArr = [
  BACKGROUNDS.BG_BLUE,
  BACKGROUNDS.BG_RED,
  BACKGROUNDS.BG_ORANGE,
  // BACKGROUNDS.BG_TAN,
  BACKGROUNDS.BG_GREEN, 
]

function ImgScroll(props, ref) {
  const imgScroller = useRef(null);
  const imgOne = useRef(null);
  const imgTwo = useRef(null);
  const imgThree = useRef(null);
  const imgFour = useRef(null);
  const container = useRef(null);
  const margin = 50;
  
  useEffect(() => {
    const imageScroll = () => {
      if (container.current !== null){
        const containerHeight = container.current.offsetTop;
        // calculate which image needs to be show and at what % of it needs to be show
        if(containerHeight - margin <= window.pageYOffset){
          imgScroller.current.className = `img-scroller fixed`
          calculateTopImageAndTopImageHeight([imgOne,imgTwo,imgThree,imgFour], containerHeight, imgScroller.current.offsetHeight)
        } 
        // we stop fixed position because we are nearing top
        if( window.pageYOffset + margin < container.current.offsetTop) {
          imgScroller.current.className = `img-scroller`
          ref.current.className = `background-trans`

        }
        // we stop fixed position and set bottom img into place for further scrolling
        if(window.pageYOffset - imgFour.current.offsetHeight > (container.current.offsetHeight)){
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
      <h2 className="featured-projects-header">
        featured<br/>
        <span className="stroke">
          projects
        </span>
      </h2>
      <div className="img-scroll-section" ref={container}>
        <div className="quotes">
          <div className="skill">
            <a href="https://stormy-thicket-96949.herokuapp.com/">
              <h4>
                Surfline
              </h4>
              <p>
                React, SASS, Javascript, HTML,<br/>
                Mongoose, Mongodb, Heroku, Node.js, Express
              </p>
              <span>Front-End, BackEnd, DevOps</span>
            </a>
          </div>
          <div className="skill">
            <a href="https://secret-river-01127.herokuapp.com/">
              <h4>Cultish</h4>
              <p>
                React, Javascript, SASS,<br/>
                HTML, Heroku
              </p>
              <span>Front-End, DevOps</span>
            </a>
          </div>
          <div className="skill">
            <h4>My Portfolio(This Site)</h4>
            <p>
              React, Javascript, SASS,<br/>
              HTML, GitHub Pages<br/>
            </p>
            <span>Front-End, DevOps</span>
          </div>
          <div className="skill">
            <a href="https://gitwindows.herokuapp.com/">
              <h4>GitForWindows</h4>
              <p>
                HTML, CSS, PHP, Heroku
              </p>
              <span>Front-End, DevOps</span>
            </a>
          </div>
          {/* <div className="skill">
            <h4>uLesson</h4>
            <p>
              Online platform<br/>
              for distance learning.
            </p>
            <span>web, mobile, product</span>
          </div> */}
        </div>
        <div className="img-scroller" ref={imgScroller}>
          <div id="one" className="img-wrap one" ref={imgOne} >
            <img src={srfline}  alt="ff"/>
          </div>
          <div className="img-wrap two" ref={imgTwo}>
            <img src={cultish} alt="ff"/>
          </div>
          <div className="img-wrap three" ref={imgThree}>
            <img src={rct} className="three" alt="ff"/>
          </div>
          <div className="img-wrap four" ref={imgFour}>
            <img src={git} alt="ff"/>
          </div>
          {/* <div className="img-wrap five" ref={imgFive}>
            <img src={uLesson} className="five" alt="ff"/>
          </div> */}
        </div>
      </div>
    </>
  )
}

const forwardedImgScroll = React.forwardRef(ImgScroll)
export default forwardedImgScroll;
