import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route

} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
const App = () => {

return (
  <Router>
  <div>
  
    <Navbar/>
    <Jumbotron />
    <Route exact path ="/Saved" component={Saved} />
    <Route exact path ="/" component={Home} />
    

    <Footer />
 
  </div>
  </Router>
)
}
export default App;
