import React  from 'react'

export default function Footer(props) {
  return (
    <footer ref={props.inputRef}>
      <div className="footer-wrap">
        <div className="idea">
          <h2>
            Have an idea?
          </h2>
          <h2 className="underline-shrink-animation">
            Tell us about it
          </h2>
        </div>
        <div className="info">
          <div className="contact">
            <h4>
              info@cuberto.com
            </h4>
            <p>
              901 N Pitt Str, Suite 170<br/>
              Alexandria, VA 22314, USA
            </p>
            <div>
              Privacy Policy
            </div>
          </div>
          <div className="footer-socs">
            <a href="#">Facebook</a>
            <a href="#">Patreon</a>
            <a href="#">Behance</a>
            <a href="#" className="bottom-row-1">Dribble</a>
            <a href="#" className="bottom-row-2">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

