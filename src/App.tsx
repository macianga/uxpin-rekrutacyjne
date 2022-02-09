import './App.scss'

function App() {

  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="top-bar-grid">
          <div>
            <span>Feature</span>
            <img src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span>Examples</span>
            <img src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span>Enterprise</span>
            <img src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span>Pricing</span>
            <img src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span>Resource</span>
            <img src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span>Merge</span>
            <img src="/src/images/menu-arrow.svg"/>
          </div>
          <div/>
          <div>
            <span style={{width: "100%"}}>1 (888) 802-9327</span>
          </div>
        </div>
      </div>
      <div className="mui-example">
        <div className="title">
          <span className="text-large font-bold">
            Here comes MUI:<br/>fully interactive UI library<br/>
          </span>
        </div>
        <div className="description">
          <span>
            Design and code with a ready Merge library – MUI.<br/>
            Prototype with React UI components and templates that feel real.
          </span>
        </div>
        <div className="email-input-group">
          <form>
            <input
              type="text"
              className="input-email"
              placeholder="Work email"
            />
            <input type="button" className="button" value="Try MUI in UXPin"/>
          </form>
        </div>
        <div className="hero-img"/>
      </div>
      <div className="questions">
        <p>What is MUI?</p>
        <span>
          Top React UI library with interactive components ready for prototyping and production. Use in your design workflow with UXPin Merge.
        </span>
        <p>Build products with fully interactive components</p>
        <span>
          Use interactive MUI components and create designs that follow Material Design principles. With all UI elements being powered by React, MUI library allows you to build fully immersive prototypes in a matter of minutes.
        </span>
        <p>Adjust, unify, and scale your design system</p>
        <span>
          Build your design system, with a single source of truth in mind. With the MUI library in UXPin, design and development needs no translation, as you all build your product using the very same code-based components.
        </span>
        <p>Use production-ready UI components</p>
        <span>
          Use MUI components in the design, handoff, and development to ensure the ultimate consistency throughout the whole development process. Rely on a trusted React framework that can be easily customised using CSS utilities.
        </span>
        <p>Need more details? Read the documentation.</p>
        <span>
          See the MUI library documentation in our Git repository. Check for yourself how Merge technology can help you bring code components into design workflow.
        </span>
      </div>
      <div className="footer">
        <div className="footer-menu">
          <div className="footer-single-menu">
            <p>UXPIN</p>
            <span></span>
            <span>Import from Sketch</span>
            <span>Customers</span>
            <span>Enterprise</span>
            <span>etc.</span>
          </div>
          <div className="footer-single-menu">
            <p>COMPARE</p>
            <span></span>
            <span>UXPin vs Figma</span>
            <span>UXPin vs Invision</span>
            <span>UXPin vs ...</span>
          </div>
          <div className="footer-single-menu">
            <p>RESOURCES</p>
            <span></span>
            <span>Docs</span>
            <span>Video Tutorials</span>
            <span>Blog</span>
            <span>E-books</span>
          </div>
          <div className="footer-single-menu">
            <p>ABOUT</p>
            <span></span>
            <span>Company</span>
            <span>Jobs</span>
            <span>Press Kit</span>
            <span>etc.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
