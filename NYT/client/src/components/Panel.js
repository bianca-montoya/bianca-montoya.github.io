import React from 'react'
import Ul from "../components/Ul";
const Panel = (props)=>{
let article = props.article;
               
    return(

     
        <div className="container">
        <div className="main-container">
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">
                            <strong><i className="fa fa-list-alt"></i>
                          
                            </strong>
                        </h1>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <div>
                                <li className="list-group-item">
                                  <Ul article = {article}/>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Panel;

