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

// copied Start

//copied End

  // When the component mounts, load all books and save them to this.state.books
//   componentDidMount() {
//     this.loadArticles();
//   }

  state= {
    topic:'',
    startYear:'',
    endYear:'',
  
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
        this.setState({ article: res.docs, topic: "", startYear: "", endYear: "" })
        console.log(this.state.article);
    }
      )
}

}

// setQuery: function(newQuery, newStart, newEnd) {
//     helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
//       this.setState({ results: { docs: data.docs } });
//     }.bind(this));
//   },
  // Loads all books  and sets them to this.state.books
  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ article: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear  && this.state.endYear) {
      API.saveArticle({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
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
                 <Panel article = {this.state.article}/>
    </div>
   
        )
    }
}

export default Home;
