import React from 'react'

const Manage = () => {
  return(
    <span className="header__text">Manage</span>
  )
}

const Friends = () => {
  return(
    <span className="header__text">Friends <span className="header__number">1</span></span>
  )
}

const SetIcon = () => {
  return(
    <i className="fas fa-cog fa-lg"></i>
  )
}

const Edit = () => {
  return(
    <span className="header__text">Edit</span>
  )
}

const Chats = () => {
  return(
    <span className="header__text">Chats <i className="fas fa-caret-down"></i></span>
  )
}

const Find = () => {
  return(
    <span className="header__text">Find</span>
  )
}

const Jin = () => {
  return(
    <span className="header__text">Chat Room</span>
  )
}

const SearchAndStackIcon = () => {
  return(
    <div>
      <i className="fas fa-search"></i>
      <i className="fas fa-bars"></i>
    </div>
  )
}



const More = () => {
  return(
    <span className="header__text">More</span>
  )
}

export {Manage, Friends, SetIcon, Edit, Chats, Find, Jin, SearchAndStackIcon, More }
