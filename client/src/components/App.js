import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom' // using url(route) to fetch different components
// BrowserRouter: looks at the current URL and tells react-router which set of components to show at any given time
// BrowserRouter, Route are components that can be used inside return div
import MainHeader from './header/MainHeader'
import MainContent from './content/MainContent'
import Footer from './footer/Footer'

// React-Router
// App = functional component (Make Stateless Component that gathers children components)

class App extends Component {

  render() {
    // probably only want this in browsers that don’t support the HTML5 history API.
    const supportsHistory = 'pushState' in window.history
    {/* <BrowserRouter forceRefresh={!supportsHistory}/> */}
  return(
    <div>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
          {/* <MainHeader url={window.location.pathname}/> */}
          <Route component={MainHeader}/>

          <Route
            exact path='/'
            render={(props) => <MainContent {...props} searchBar={true} page='friends'/>}
          />

          <Route
            exact path='/chats'
            render={(props) => <MainContent {...props}
            searchBar={true} page='chats'/>}

          />

          <Route
            exact path='/find'
            render={(props) => <MainContent {...props}
            searchBar={false} page='find'/>}

          />

          <Route
            exact path='/more'
            render={(props) => <MainContent {...props}
            searchBar={false} page='more'/>}
          />

          <Route
            exact path='/chatroom'
            render={(props) => <MainContent {...props}
            searchBar={false} page='chatroom'/>}
          />

          {/* <Footer/> */}
          <Route render={(props)=><Footer {...props}/>}/>
        </div>
      </BrowserRouter>
    </div>
  )
}
}

export default App
