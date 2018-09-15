import React from 'react'



const Find = () => {
  return (
    <div>
      <section className="find__options">
          <div className="find__option">
              <i className="fas fa-address-book fa-lg"></i>
              <span className="find__option-title">Find</span>
          </div>

          <div className="find__option">
              <i className="fas fa-qrcode fa-lg"></i>
              <span className="find__option-title">QR Code</span>
          </div>

          <div className="find__option">
              <i className="fas fa-mobile fa-lg"></i>
              <span className="find__option-title">Shake</span>
          </div>

          <div className="find__option">
              <i className="fas fa-envelope fa-lg"></i>
              <span className="find__option-title">Invite via SMS</span>
          </div>
      </section>

      <section className="find__recommended">
          <header>
              <h6 className="find__recommended__title">Recommended Friends</h6>
          </header>
          <div className="find__recommended__none">
              <span className="find__recommended__text">You have no recommended friends.</span>
          </div>
      </section>
    </div>
  )
}

export default Find
