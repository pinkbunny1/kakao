import React from 'react'

const TopHeader = () => {
  return(
      <div className="header__top">
        {/* <!-- Mobile Top Battery Header --> */}
          <div className="header__column">
              <i className="fas fa-plane"></i>
              <i className="fas fa-wifi"></i>
          </div>

          <div className="header__column">
              <div className="header__time">18:38</div>
          </div>

          <div className="header__column">
              <i className="fas fa-moon"></i>
              <i className="fab fa-bluetooth-b"></i>
              <span className="header__battery">66% <i className="fas fa-battery-three-quarters"></i></span>
          </div>
          {/* <!-- /Mobile Top Battery Header --> */}
      </div>
  )
}

export default TopHeader
