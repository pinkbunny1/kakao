import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    console.log('default props form Route:', props)
    super(props)
    this.state = {
      selected: props.location.pathname
    }
  }


  _highlightTab = (name) => {
    console.log('tab selected:', name)
    this.setState({
      selected : name
    })
  }


  _nameMe = (name) => {
    const { selected } = this.state;
    const selectedTab = 'tab-bar__tab tab-bar__tab--selected'
    const unSelectedTab = 'tab-bar__tab'

    return name === selected ? selectedTab : unSelectedTab

    // className = {`tab-bar__tab ${ selected === "/" ? "tab-bar__tab--selected" : ""}`}
    }


  render() {
    return(
      // <!-- App Bottom Navi tab bar -->
        <nav className="tab-bar">
            <a href="/"
               className={this._nameMe('/')}
               onClick={() => this._highlightTab('/')}
               >
                <i className="fas fa-user"></i>
                <span className="tab-bar__title">Friends</span>
            </a>

            <a href="/chats"
               className={this._nameMe('/chats')}
               onClick={() => this._highlightTab('/chats')}
               >
                <i className="fas fa-comment"></i>
                <span className="tab-bar__title">Chats</span>
            </a>

            <a href="/find"
               className={this._nameMe('/find')}
               onClick={() => this._highlightTab('/find')}
               >
                <i className="fas fa-search"></i>
                <span className="tab-bar__title">Find</span>
            </a>

            <a href="/more"
               className={this._nameMe('/more')}
               onClick={() => this._highlightTab('/more')}
               >
                <i className="fas fa-ellipsis-h"></i>
                <span className="tab-bar__title">More</span>
            </a>
        </nav>
      // <!-- /App Bottom Navi tab bar -->
    )
  }
}


export default Footer
