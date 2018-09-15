import React, {Component} from 'react'
import Header from '../../header/MainHeader'
import Footer from '../../footer/Footer'



const withLayout = (wrappedComponent) => {
    class HOC extends Component {
      render() {
        return (
          <div>
            <Header/>

            <wrappedComponent />

            <Footer />
          </div>
        )
      }
    }
    return HOC

}

export default withLayout
