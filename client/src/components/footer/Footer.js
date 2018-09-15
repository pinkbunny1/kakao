import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

class Footer extends Component {

  render() {
    return(
      // <!-- App Bottom Navi tab bar -->
        <nav className="tab-bar">
            <NavLink
              exact
              to="/friends"
              className="tab-bar__tab"
              activeClassName="tab-bar__tab tab-bar__tab--selected"
              >
                <i className="fas fa-user"></i>
                <span className="tab-bar__title">Friends</span>
            </NavLink>

            <NavLink
              exact
              to="/chats"
              className="tab-bar__tab"
              activeClassName="tab-bar__tab tab-bar__tab--selected"
              >
                <i className="fas fa-comment"></i>
                <span className="tab-bar__title">Chats</span>
            </NavLink>

            <NavLink
              exact
              to="/find"
              className="tab-bar__tab"
              activeClassName="tab-bar__tab tab-bar__tab--selected"
              >
                <i className="fas fa-search"></i>
                <span className="tab-bar__title">Find</span>
            </NavLink>

            <NavLink
              exact
              to="/more"
              className="tab-bar__tab"
              activeClassName="tab-bar__tab tab-bar__tab--selected"
              >
                <i className="fas fa-ellipsis-h"></i>
                <span className="tab-bar__title">More</span>
            </NavLink>
        </nav>
      // <!-- /App Bottom Navi tab bar -->
    )
  }
}


export default Footer
