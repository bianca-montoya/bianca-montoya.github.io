import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect 
} from 'react-router-dom';

const Navbar =()=>{

    return(
        <div  className="container">
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                        <a className="navbar-brand" href="/">NYT-React</a></div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to ="/">Search</Link></li>
                                <li><Link to ="/saved">Saved Articles</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    )
}
export default Navbar;