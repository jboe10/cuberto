import React  from 'react'

export default function Footer(props) {
  return (
    <footer ref={props.inputRef}>
      <div id="contact" className="footer-wrap">
        <div className="idea">
          <h2>
            Questions and Offers?
          </h2>
          <h2 className="underline-shrink-animation">
            Contact me!
          </h2>
        </div>
        <div className="info">
          <div className="contact">
            <h4>
              jdboe2018@gmail.com
            </h4>
          </div>
          <div className="footer-socs">
            <a href="https://www.linkedin.com/in/jonathan-d-boe/">Linked in</a>
            <a href="https://github.com/jboe10">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

