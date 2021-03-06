import './App.scss'
import {FormEvent, useEffect, useState} from "react";
import butter from "./utils/butter-client";
import Footer from "./components/navigation/Footer/Footer";
import TopBar from "./components/navigation/TopBar/TopBar";

type ButterCmsFieldsType = {
  header: string,
  header_description: string,
}


function App() {
  const [pageContent, setPageContent] = useState<ButterCmsFieldsType>();
  const [emailValue, setEmailValue] = useState("")

  useEffect(()=>{
    const asyncGetter = async ()=>{
      const resp = await butter.page.retrieve('*', 'uxpin-landing-page');
      setPageContent(resp.data.data.fields);
    }
    asyncGetter();
  }, [])

  const sendEmail = async (e: FormEvent<HTMLFormElement>)=>{
    // additional validation might be needed
    console.log(emailValue);
    e.preventDefault();
  }

  const getTextElement = (text: string | undefined) => {
    if(!text) return;
    return <span dangerouslySetInnerHTML={{__html: text}} />;
  }


  return (
    <div className="main-content">
      <TopBar/>
      <div className="mui-example-header">
        <span className="title text-large font-extra-bold">
          {getTextElement(pageContent?.header)}
        </span>
        <span className="description">
          {getTextElement(pageContent?.header_description)}
        </span>
        <form className="email-input-group" onSubmit={e => sendEmail(e)}>
          <input
            type="email"
            className="input-email"
            placeholder="Work email"
            value={emailValue}
            onChange={e=> setEmailValue(e.target.value)}
          />
          <input type="submit" className="btn-medium" value="Try MUI in UXPin"/>
        </form>
        <div className="hero-img"/>
      </div>
      <div className="questions-and-description">
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
      <Footer/>
    </div>
  )
}

export default App
