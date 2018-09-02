import React from 'react'

const MsgTo = (props) => {
  return(
    <div class="chat__message chat__message--to">
        {/* <!-- LEFT --> */}
        <img src="images/dog1.jpeg" alt="" class="chat__message__user-image user-image"/>

        {/* <!-- CENTER --> */}
        <div class="chat__message-center">
          <h3 class="chat__message__user-name user-name">{props.username}</h3>
          <span class="chat__message__text">{props.message}</span>
        </div> -->

        {/* <!-- RIGHT --> */}
        <div class="chat__message_time__container">
          <span class="chat__message__time">
            17:59
          </span>
        </div>
    </div>
  )
}

export default MsgTo
