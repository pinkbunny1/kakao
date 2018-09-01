import React from 'react'



const Chats = () => {
  return (
    <div>
      <ul className="chats__list">
          <li className="chats__chat-row">
            {/* <!-- Divided into two columms --> */}
            <a href="/chatroom">
              <div className="chat__content">
                  <img src="images/dog1.jpeg" alt="" className="chats__content__user-image user-image" />
                  <div className="chat__preview">
                      <h3 className="chat__user-name user-name">JIN</h3>
                      <span className="chat__last-message">Hey this is the last message.</span>
                  </div>
              </div>
              <span className="chat__date-time">
                  15:55
              </span>
            </a>
          </li>

          <li className="chats__chat-row">
            <a href="/chatroom">
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
            </a>
          </li>
      </ul>
    </div>
  )
}

export default Chats
