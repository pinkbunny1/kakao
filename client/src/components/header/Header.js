import React, {Component} from 'react'
import {Manage, Friends, SetIcon, Edit, Chats, Find, Jin, SearchAndStackIcon , More} from './FirstHeader'

class Header extends Component {

  first() {
    switch (this.props.url) {
      case '/':
        return <Manage/>
      case '/chats':
        return <Edit/>
      case '/find':
        return <Find/>
      case '/more':
        return <More/>
      case '/chatroom':
        break
    }
  }

  second() {
    switch (this.props.url) {
      case '/':
        return <Friends/>
      case '/chats':
        return <Chats/>
      case '/find':
        return <Find/>
      case '/more':
        break
      case '/chatroom':
        return <Jin/>
    }
  }

  third() {
    switch (this.props.url) {
      case '/':
        return <SetIcon/>
      case '/chats':
        break
      case '/find':
        break
      case '/more':
        return <SetIcon/>
      case '/chatroom':
        return <SearchAndStackIcon/>
    }
  }
  render() {
    console.log('header:',this.props)
    return (
      <div>
      {/*  <!-- App Content Header --> */}
        <div className="header__bottom">
            <div className="header__column">
              {this.first()}
            </div>

            <div className="header__column">
              {this.second()}
            </div>

            <div className="header__column">
              {this.third()}
            </div>
        </div>
      {/*  <!-- /App Content Header --> */}
      </div>
    )
  }
}



export default Header
