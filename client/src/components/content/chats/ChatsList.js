import React from 'react'
import { NavLink } from 'react-router-dom'

import SearchBarHeader from '../others/SearchBarHeader'


const ChatsList = () => {
  return (
    <div>
      <SearchBarHeader/>
      <ul className="chats__list">
          <li className="chats__chat-row">
            {/* <!-- Divided into two columms --> */}
            {/* <a href="/chatroom"> */}
            <NavLink
              to="/chats/Khanie"
            >
              <div className="chat__content">
                  <img src="./images/dog1.jpeg" alt="" className="chats__content__user-image user-image" />
                  <div className="chat__preview">
                      <h3 className="chat__user-name user-name">Khanie</h3>
                      <span className="chat__last-message">Hey this is the last message.</span>
                  </div>
              </div>
              <span className="chat__date-time">
                  15:55
              </span>
            </NavLink>
          </li>

          <li className="chats__chat-row">
            <NavLink
              to="/chats/Kakao"
              >
              <div className="chat__content">
                  <img src="images/dog1.jpeg" alt="" className="chats__content__user-image user-image" />
                  <div className="chat__preview">
                      <h3 className="chat__user-name user-name">KakaoTalk</h3>
                      <span className="chat__last-message">Test message.</span>
                  </div>
              </div>
              <span className="chat__date-time">
                  15:55
              </span>
            </NavLink>
          </li>
      </ul>
    </div>
  )
}

export default ChatsList
