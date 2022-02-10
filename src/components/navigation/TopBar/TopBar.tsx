import "./topbar.scss"
import "/src/scss/generic.scss"

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-container">
        <div/>
        <div className="top-bar-logo-container">
          <a className="icon-medium uxpin-logo-black-fill"/>
        </div>
        <div>
          <span>Feature</span>
          <div style={{marginTop: "1px"}} className="icon-small menu-arrow-icon"/>
        </div>
        <div>
          <span>Examples</span>
        </div>
        <div>
          <span>Enterprise</span>
          <div className="icon-small menu-arrow-icon"/>
        </div>
        <div>
          <span>Pricing</span>
        </div>
        <div>
          <span>Resource</span>
          <div className="icon-small menu-arrow-icon"/>
        </div>
        <div>
          <div className="new-item" style={{marginRight: "0.3rem"}}>NEW</div>
          <span>Merge</span>
          <div className="icon-small menu-arrow-icon"/>
        </div>
        <div style={{textAlign: "left", width: "100%", marginLeft: "60px"}}>
          <span>1 (888) 802-9327</span>
        </div>
        <div>
          <span className="log-in-text">Log in</span>
          <button className="btn-small">Try for free</button>
        </div>
      </div>
    </div>
  )
}

export default TopBar
