import React, { Component } from 'react'

import SearchBarContent from './others/SearchBarHeader'
import Index from './home/Index'
import Find from './find/Find'
import More from './more/More'

import ChatsList from './chats/ChatsList'
import ChatRoom from './chats/ChatRoom'


class MainContent extends Component {

  render() {
    console.log('this.props:', this.props)
    const page=this.props.page

    return(
      <div className={page}>
        {this.props.searchBar ? <SearchBarContent/> :''}
        {this.props.location.pathname === "/" ? <Index/> : ''}
        {this.props.location.pathname === "/chats" ? <ChatsList/> : ''}
        {this.props.location.pathname === "/find" ? <Find/> : ''}
        {this.props.location.pathname === "/more" ? <More/> : ''}
        {this.props.page === "chatroom" ? <ChatRoom name={this.props.match.params.name}/> : ''}
      </div>
    )
  }
}


export default MainContent
