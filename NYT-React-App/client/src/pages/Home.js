import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
import Panel from "../components/Panel";
import List from "../components/List";
class Home extends React.Component{

  state= {
    topic:'',
    startYear:'',
    endYear:'',
    found:false,
  article:[]

 };

handleAPISearch=(event)=>{
    event.preventDefault();
    if (this.state.topic && this.state.startYear  && this.state.endYear) {
    let term = this.state.topic;
    let start = this.state.startYear;
    let end = this.state.endYear;
    //declaring self to use this in the inner function
  
    API.runQuery(term, start, end).then(res =>{
      if (res.docs.length<1) {
        this.setState({ found: false});
      } else {
        this.setState({ article: res.docs, topic: "", startYear: "", endYear: "", found: true })
        
      }
        
    }
      )
}

}

handleSave = data=> {
  // event.preventDefault();
 
    API.saveArticle(data)
    console.log(data)
      // .then(res => this.loadBooks())
      // .catch(err => console.log(err));

};

  // Loads all article and sets them to this.state.article
  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ article: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

 

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    render(){

        return(

<div className="container">
                <div className="main-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h1 className="panel-title">
                                        <strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                            
                                                " Query"
                                              
                                            </strong>
                                    </h1>
                                </div>
                                <div className="panel-body">
                                    <form>
                                        <div className="form-group">
                                            <h4 className="">
                                                <strong>Topic</strong>
                                            </h4>
                                            <Input
                                            value={this.state.topic}
                                            onChange={this.handleInputChange}
                                            name="topic"
                                            placeholder="Topic (required)"
                                          />
                                            <h4>
                                                <strong>Start Year</strong>
                                            </h4>
                                            <Input
                                            value={this.state.startYear}
                                            onChange={this.handleInputChange}
                                            name="startYear"
                                            placeholder="Start Year (required)"
                                          />
                                            <h4>
                                                <strong>End Year</strong>
                                            </h4>
                                            <Input
                                            value={this.state.endYear}
                                            onChange={this.handleInputChange}
                                            name="endYear"
                                            placeholder="End Year (required)"
                                          />
                                        </div>
                                        <div className="pull-right">
                                        <FormBtn
                                        disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                                        onClick={this.handleAPISearch}
                                        className="btn btn-success"
                                      >
                                        Submit
                                      </FormBtn>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <List />
                 <Panel article = {this.state.article}
                 found = {this.state.found}
             />
    </div>
   
        )
    }
}

export default Home;
