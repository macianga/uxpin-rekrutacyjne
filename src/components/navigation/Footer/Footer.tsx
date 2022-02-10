import "./footer.scss"

function Footer() {
  return (
      <footer className="footer">
        <div className="icon-medium uxpin-logo-white-fill"/>
        <div className="footer-menu">
          <div className="footer-single-menu">
            <p>UXPIN</p>
            <span/>
            <span>Import from Sketch</span>
            <span>Customers</span>
            <span>Enterprise</span>
            <span>etc.</span>
          </div>
          <div className="footer-single-menu">
            <p>COMPARE</p>
            <span/>
            <span>UXPin vs Figma</span>
            <span>UXPin vs Invision</span>
            <span>UXPin vs ...</span>
            <span>&nbsp;</span>
          </div>
          <div className="footer-single-menu">
            <p>RESOURCES</p>
            <span/>
            <span>Docs</span>
            <span>Video Tutorials</span>
            <span>Blog</span>
            <span>E-books</span>
          </div>
          <div className="footer-single-menu">
            <p>ABOUT</p>
            <span/>
            <span>Company</span>
            <span>Jobs</span>
            <span>Press Kit</span>
            <span>etc.</span>
          </div>
        </div>
        <span className="copyright-text">
          © UXPin Inc. All rights reserved.
        </span>
        <div className="social-and-terms">
          <span>Privacy</span>
          <span>Terms of Service</span>
          <div className="social-media-logos">
            <div className="icon-xsmall facebook-logo" style={{display: "inline-block"}}/>
            <div className="icon-xsmall twitter-logo" style={{display: "inline-block"}}/>
            <div className="icon-xsmall dribble-ball-logo" style={{display: "inline-block"}}/>
          </div>
        </div>
      </footer>
  )
}

export default Footer
