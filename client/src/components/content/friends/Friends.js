import React from 'react'

import SearchBarHeader from '../others/SearchBarHeader'


const Friends = () => {
  return (
    <div>
      <SearchBarHeader/>
      <section className="friends__section">
          <header>
              <h6 className="friends__section-title">My Profile</h6>
          </header>

          <div className="friends__section-rows">
              <div className="friends__section-row">
                <a href="profile.html">
                  <img src="images/dog1.jpeg" alt="" className="friends__section__user-image user-image" />
                  <span className="friends__section-name">Jin</span>
                </a>
              </div>
              <div className="friends__section-row">
                <a href="profile.html">
                  <img src="images/dog1.jpeg" alt="" className="friends__section__user-image user-image" />
                  <span className="friends__section-name">Friends' Names Display</span>
                </a>
              </div>

          </div>
      </section>

      <section className="friends__section">
          <header className="friends__section-header">
              <h6 className="friends__section-title">Friends</h6>
          </header>

          <div className="friends__section-rows">
              <div className="friends__section-row with-tagline">
                  <div className="friends__section-column">
                    <a href="profile.html">
                      <img src="images/dog1.jpeg" alt="" className="friends__section__user-image user-image" />
                      <span className="friends__section-name">Jin</span>
                    </a>
                  </div>
                  <span className="friends__section-tagline">Life is short. So live your life.</span>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Friends
