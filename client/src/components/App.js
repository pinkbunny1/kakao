import React, {Component} from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom' // using url(route) to fetch different components
// BrowserRouter: looks at the current URL and tells react-router which set of components to show at any given time
// BrowserRouter, Route are components that can be used inside return div
import MainHeader from './header/MainHeader'
import MainContent from './content/MainContent'
import Footer from './footer/Footer'

// React-Router
// App = functional component (Make Stateless Component that gathers children components)


const PageNotFound = () => {
  return(
    <div>
      <h2>Page Not Found 404 !</h2>
      <br/>
      <Link to="/">Back Home</Link>
      <br/>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight:'bold',
          color:'red'
        }}
      >Back Home</NavLink>
    </div>

  )
}

class App extends Component {

  render() {
    // probably only want this in browsers that don’t support the HTML5 history API.
    const supportsHistory = 'pushState' in window.history
    {/* <BrowserRouter forceRefresh={!supportsHistory}/> */}
  return(
    <div>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
          <Route component={MainHeader}/>
            <Switch>
              <Route
                strict sensitive
                exact path='/'
                render={(props) => <MainContent {...props} searchBar={true} page='friends'/>}
              />

              <Route
                strict sensitive
                exact path='/chats'
                render={(props) => <MainContent {...props}
                searchBar={true} page='chats'/>}

              />

              <Route
                strict sensitive
                exact path='/find'
                render={(props) => <MainContent {...props}
                searchBar={false} page='find'/>}

              />

              <Route
                strict sensitive
                exact path='/more'
                render={(props) => <MainContent {...props}
                searchBar={false} page='more'/>}
              />

              <Route
                strict sensitive
                exact path='/chatroom'
                render={(props) => <MainContent {...props}
                searchBar={false} page='chatroom'/>}
              />

              <Route component={PageNotFound} />
            </Switch>
          <Route render={(props)=><Footer {...props}/>}/>
        </div>
      </BrowserRouter>
    </div>
  )
}
}

export default App
