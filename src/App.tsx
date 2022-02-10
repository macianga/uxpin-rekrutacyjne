import './App.scss'
import {useEffect, useState} from "react";
import butter from "./utils/butter-client";

function App() {
  const [pageContent, setPageContent] = useState();
  const [emailValue, setEmailValue] = useState("")

  useEffect(()=>{
    const asyncGetter = async ()=>{
      const resp = await butter.page.retrieve('*', 'uxpin-landing-page');
      setPageContent(resp.data.data.fields)

    }
    asyncGetter();
  }, [])


  const getTextElement = (text: string) => {
    if(!text) return;
    return <span dangerouslySetInnerHTML={{__html: text}} />;
  }


  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="top-bar-grid">
          <div/>
          <div className="top-bar-logo-container">
            <img alt="" className="top-bar-logo" src="/src/images/UXPin-Logo-BlackFill.svg"/>
          </div>
          <div>
            <span>Feature</span>
            <img alt="" src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span>Examples</span>
          </div>
          <div>
            <span>Enterprise</span>
            <img alt="" src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span>Pricing</span>
          </div>
          <div>
            <span>Resource</span>
            <img alt="" src="/src/images/menu-arrow.svg"/>
          </div>
          <div>
            <span className="new-item">NEW</span>
            <span>Merge</span>
            <img alt="" src="/src/images/menu-arrow.svg"/>
          </div>
          <div style={{textAlign: "left", width: "100%", marginLeft: "60px"}}>
            <span>1 (888) 802-9327</span>
          </div>
          <div>
            <span className="log-in-text">Log in</span>
            <button className="log-in-button">Try for free</button>
          </div>
        </div>
      </div>
      <div className="mui-example">
        <div className="title">
          <span className="text-large font-extra-bold" style={{lineHeight: "1rem"}}>
            {getTextElement(pageContent?.header)}
          </span>
        </div>
        <div className="description">
          <span>
            {getTextElement(pageContent?.header_description)}
          </span>
        </div>
        <div className="email-input-group">
          <form onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              className="input-email"
              placeholder="Work email"
              value={emailValue}
              onChange={e=> setEmailValue(e.target.value)}
            />
            <input type="submit" className="button" value="Try MUI in UXPin"/>
          </form>
        </div>
        <div className="hero-img"/>
      </div>
      <div className="questions">
        <div>
          <p>What is MUI?</p>
          <span>
            Top React UI library with interactive components ready for prototyping and production.
            Use in your design workflow with <a className="text-link">UXPin Merge</a>.
          </span>
        </div>
        <div>
          <p>Build products with fully interactive components</p>
          <span>
            Use interactive MUI components and create designs that follow Material Design principles. With all UI elements being powered by React, MUI library allows you to build fully immersive prototypes in a matter of minutes.
          </span>
        </div>
        <div>
          <p>Adjust, unify, and scale your design system</p>
          <span>
            Build your design system, with a single source of truth in mind. With the MUI library in UXPin, design and development needs no translation, as you all build your product using the very same code-based components.
          </span>
          <div>
            <p>Clear documentation for designers and developers</p>
            <span><b className="font-semi-bold">Use ready MUI kit documentation.</b> Build consistent design systems and features with the help of documentation created for both designers and developers.</span>
            <p>UI components with true functional fidelity</p>
            <span><b className="font-semi-bold">Leverage the power of code to reach higher fidelity than ever.</b> Build your design system and design with components that have built-in full interactivity.</span>
            <p>Built with accessibility in mind</p>
            <span><b className="font-semi-bold">Prototype with components that will help you reach a greater audience.</b> Design with ready elements that are accessible. Make sure your product can be used by everyone.</span>
          </div>
        </div>
        <div>
          <p>Use production-ready UI components</p>
          <span>
            Use MUI components in the design, handoff, and development to ensure the ultimate consistency throughout the whole development process. Rely on a trusted React framework that can be easily customised using CSS utilities.
          </span>
        </div>
        <div>
          <p>Need more details? Read the documentation.</p>
          <span>
            See the MUI library documentation in our Git repository. Check for yourself how Merge technology can help you bring code components into design workflow.
          </span>
        </div>
      </div>
      <div className="footer">
        <div className="uxpin-logo-footer">
          <img alt="" src="/src/images/UXPin-Logo-WhiteFill.svg"/>
        </div>
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
        <span className="copyright">
          © UXPin Inc. All rights reserved.
        </span>
        <div className="social-n-terms">
          <span>Privacy</span>
          <span>Terms of Service</span>
          <div className="logos">
            <img alt="" src="/src/images/facebook-logo.svg"/>
            <img alt="" src="/src/images/twitter-logo.svg"/>
            <img alt="" src="/src/images/dribbble-ball-logo.svg"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
