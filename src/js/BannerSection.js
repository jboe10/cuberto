import React, {useState, useEffect, useRef} from 'react'
import Banner from './Banner'

export default function BannerSection() {
  const lefToRight = 'left-to-right';
  const rightToLeft = 'right-to-left';
  const bannerSectionEle = useRef(null);
  const [bannerDirection, setBannerDirection] = useState("");
  
  useEffect(() => {
    let topPosition = window.pageYOffset;
    const scrolling = () => {
      if (bannerSectionEle !== null) {
        const topVisible = (bannerSectionEle.current.offsetTop - window.pageYOffset- window.innerHeight < 0)? true: false;
        const bottomVisible = (bannerSectionEle.current.offsetTop - window.pageYOffset > -bannerSectionEle.current.offsetHeight)? true: false;
        const currentTopPosition = window.pageYOffset;
        // banners are visible
        if (topVisible && bottomVisible){
          // scrolling up
          if(currentTopPosition < topPosition) {
            if (bannerDirection !== rightToLeft){
              setBannerDirection(rightToLeft)
            }
          }
          // scrolling down
          if(currentTopPosition > topPosition) {
            if (bannerDirection !== lefToRight) {
              setBannerDirection(lefToRight);
            }
          }
          topPosition = currentTopPosition;
        }
      }
    }

    window.addEventListener('scroll', scrolling)

    return () => {
      window.removeEventListener('scroll', scrolling);
    }
  }, [bannerDirection, rightToLeft, lefToRight, bannerSectionEle])

  return (
    <section ref={bannerSectionEle} className="banner-section">
      <Banner name="Strategy" speed="slow" direction={bannerDirection}/>
      <Banner name="Design" speed="medium" direction={bannerDirection}/> 
      <Banner name="Development" speed="fast" direction={bannerDirection}/>
      <Banner name="Marketing" speed="very-slow" direction={bannerDirection}/>
    </section>
  )
}
