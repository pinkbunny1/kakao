import React from 'react'



const Footer = () => {
  return (
    // <!-- App Bottom Navi tab bar -->
      <nav className="tab-bar">
          <a href="/" className="tab-bar__tab tab-bar__tab--selected">
              <i className="fas fa-user"></i>
              <span className="tab-bar__title">Friends</span>
          </a>
          <a href="/chats" className="tab-bar__tab">
              <i className="fas fa-comment"></i>
              <span className="tab-bar__title">Chats</span>
          </a>
          <a href="/find" className="tab-bar__tab">
              <i className="fas fa-search"></i>
              <span className="tab-bar__title">Find</span>
          </a>
          <a href="/more" className="tab-bar__tab">
              <i className="fas fa-ellipsis-h"></i>
              <span className="tab-bar__title">More</span>
          </a>
      </nav>
    // <!-- /App Bottom Navi tab bar -->
  )
}

export default Footer
