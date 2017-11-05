import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

const Jumbotron = (props) =>{


    return(
<div  className="container">
 <div className="jumbotron">
 <h2 className="text-center">
     <strong>(ReactJS) New York Times Article Scrubber</strong>
 </h2>
 <h3 className="text-center">Search for and save articles of interest.</h3>
</div>
</div>
    )
}
export default Jumbotron;