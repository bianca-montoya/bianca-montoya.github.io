import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import API from "../utils/API";
import ListItem from "../components/ListItem";
class Saved extends React.Component{
    state = {
        articleSaved: []
    }
    //do on page load
    componentDidMount() {
        this.loadArticles();
      }
      //load saved article from db
      loadArticles= () => {
        API.getArticles()
          .then(res =>
            this.setState({ articleSaved: res.data })
          )
          .catch(err => console.log(err));
      };
       // Deletes an article from the database with a given id, then reloads books from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
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
                                    <strong>
                                        <i className="fa fa-download" aria-hidden="true"></i>
                                       
                                    </strong>
                                </h1>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    <div>
                                    <ListItem articleSaved ={this.state.articleSaved}
                                    deleteArticle = {this.deleteArticle}
                                    />
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
}
export default Saved;



