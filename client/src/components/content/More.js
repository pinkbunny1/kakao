import React from 'react'



const More = () => {
  return(
    <div>
      <header className="more__header">
        <div className="more__header-column">
          <img src="images/dog1.jpeg" alt="" className="more__header__user-image user-image"/>
          <div className="more__header__user-info">
            <h3 className="more__header__user-info__name">Jin</h3>
            <span className="more__header__user-info__email">jin@gmail.com</span>
          </div>
        </div>

        <div className="more__header-column">
          <i className="far fa-comment-alt fa-2x"></i>
        </div>
      </header>

      <section className="more__options">
        <div className="more__option">
          <i className="far fa-smile fa-lg"></i>
          <span className="more__option-name">Emoticions</span>
        </div>
        <div className="more__option">
          <i className="fas fa-paint-brush fa-lg"></i>
          <span className="more__option-name">Themes</span>
        </div>
        <div className="more__option">
          <i className="far fa-handshake fa-lg"></i>
          <span className="more__option-name">Plus Friend</span>
        </div>
        <div className="more__option">
          <i className="far fa-user-circle fa-lg"></i>
          <span className="more__option-name">Account</span>
        </div>
      </section>

      <section className="more__plus-friends">
        <header className="more__plus-friends__header">
          <h2 className="more__plus-friends__header-title">Plus Friends</h2>
          <span className="more__plus-friends__header-info">
            <i className="fas fa-info-circle"></i>
            Learn More
          </span>
        </header>

        <div className="more__plus-friends__items">
          <div className="more__plus-friends__item">
            <i className="fas fa-utensils"></i>
            <span className="more__plus-friends__item-title">Order</span>
          </div>
          <div className="more__plus-friends__item">
            <i className="fas fa-home"></i>
            <span className="more__plus-friends__item-title">Store</span>
          </div>
          <div className="more__plus-friends__item">
            <i className="fas fa-tv"></i>
            <span className="more__plus-friends__item-title">TV Channel/Radio</span>
          </div>
          <div className="more__plus-friends__item">
            <i className="fas fa-pencil-alt"></i>
            <span className="more__plus-friends__item-title">Creation</span>
          </div>
          <div className="more__plus-friends__item">
            <i className="fas fa-user-graduate"></i>
            <span className="more__plus-friends__item-title">Education</span>
          </div>
          <div className="more__plus-friends__item">
            <i className="far fa-smile"></i>
            <span className="more__plus-friends__item-title">Politics/Society</span>
          </div>
          <div className="more__plus-friends__item">
            <i className="fas fa-dollar-sign"></i>
            <span className="more__plus-friends__item-title">Finance</span>
          </div>
          <div className="more__plus-friends__item">
            <i className="fas fa-film"></i>
            <span className="more__plus-friends__item-title">Movies/Music</span>
          </div>
        </div>
      </section>

      <section className="more__extras">
        <div className="more__extra">
          <img src="images/dog1.jpeg" alt="kakao-story" className="more__extra-image"/>
          <span className="more__extra-title">Kakao Story</span>
        </div>

        <div className="more__extra">
          <img src="images/dog1.jpeg" alt="path" className="more__extra-image"/>
          <span className="more__extra-title">Path</span>
        </div>

        <div className="more__extra">
          <img src="images/dog1.jpeg" alt="kakao-friends" className="more__extra-image"/>
          <span className="more__extra-title">Kakao Friends</span>
        </div>
      </section>
    </div>
  )
}

export default More
