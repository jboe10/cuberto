import React, { useEffect, useRef } from 'react';
import one from '../images/js.png'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'

export default function ImgScroll() {
  const imgScroller = useRef(null);
  const imgOne = useRef(null);
  const imgTwo = useRef(null);
  const imgThree = useRef(null);
  const imgFour = useRef(null);
  const imgFive = useRef(null);
  const container = useRef(null);
  
  
  useEffect(() => {
    window.addEventListener('scroll', function(){ 
    
      if (container.current !== null){
        const containerHeight = container.current.offsetTop;
        if(containerHeight - 50 <= window.pageYOffset){
          imgScroller.current.className = `img-scroller fixed`
          calculateTopImageAndTopImageHeight2([imgOne,imgTwo,imgThree,imgFour,imgFive], containerHeight, 840)
        } 
        // we stop fixed position
        if( window.pageYOffset + 50 < container.current.offsetTop) {
          imgScroller.current.className = `img-scroller`
        }
        // we stop fixed position and set bottom img into place for further scrolling
        if(window.pageYOffset - 250 > (container.current.offsetHeight)){
          imgScroller.current.className = `img-scroller bottom`
        }
        
      }
    }, true)

    //add rl  lr animation change for scrolling up/down
    // save current height 
    // if next opposite change animation class on 
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
  )
}
