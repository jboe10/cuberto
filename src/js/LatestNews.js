import React from 'react'

export default function LatestNews() {
  return (
    <section className="latest-news">
      <h1>
        Latest<br className="title-br"/> news
      </h1>

      <div className="news-column">
        <div className="news-post">
          <p>
            Subscribe to our Patreon<br/> 
            channel: all the best and<br/>
            newest ones will be there
          </p>
          <div className="news-date">
            Jun 10, 2020
          </div>
        </div>

        <div className="news-post">
          <p>
            Design tips for designers, that<br/>
            cover everything you need to<br/> 
            increase your skill
          </p>
          <div className="news-date">
            Jun 2, 2020
          </div>
        </div>

        <div className="news-post">
          <p>
            Figma Tutorial & Liquid Swipe<br/>
            After Effects Animation (2020)
          </p>
          <div className="news-date">
            May 6, 2020
          </div>
        </div>
      </div>

    </section>
  )
}
