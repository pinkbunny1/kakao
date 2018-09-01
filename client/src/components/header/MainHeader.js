import React, {Component} from 'react'

import TopHeader from './TopHeader'
import Header from './Header'

// const MainHeader = (props) => {
//   console.log('props:', this.props.location)
//   return(
//     <div className="universal-header">
//       <TopHeader/>
//       <Header url={props.path}/>
//     </div>
//   )
// }
class MainHeader extends Component {

  render() {
    return (

      <div className="universal-header">
        <TopHeader/>
        <Header url={this.props.location.pathname}
        />
      </div>
    )
  }

}

export default MainHeader
