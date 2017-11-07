import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch

} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Saved from './pages/Saved'
import Home from './pages/Home'
import Nopage from './pages/Nopage'
const App = () => {
  return (
    <Router>
      <div>

        <Navbar />
        <Jumbotron />
        <Route exact path='/Saved' component={Saved} />
        <Route exact path='/' component={Home} />
        {/* <Route path="*" exact={true} component={Nopage} /> */}
        {/* <Redirect from="*" to="/Nopage"/> */}
        <Footer />

      </div>
    </Router>
  )
}
export default App
