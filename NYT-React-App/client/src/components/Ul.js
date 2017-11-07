
import React from 'react'
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";
class Ul extends React.Component{

    //Save to database
    handleSave = index => {
     
          API.saveArticle({
               topic: this.props.article[index].headline.main,
               web_url:  this.props.article[index].web_url
                   })
            .then(res => alert('Article Saved'))
          .catch(err => console.log(err));
      
      };


render(){
    return this.props.found ?(
 this.props.article.map((article, index) =>{
    return(
<div key={index}>
<li className="list-group-item">
<h3>
    <span >
    <em>{article.headline.main}</em>
     </span>
    <span className="btn-group pull-right" > 
         <a href={article.web_url}  rel="noopener noreferrer" target="_blank">
               <button class="btn btn-default ">View Article</button>
         </a>
       
         <FormBtn
         onClick={() => this.handleSave(index)} 
         className="btn btn-success"
          >
      SAVE </FormBtn>
    </span>
</h3>
<p>

</p>
    </li>    </div>
    )
})):( <h1> Nothing here </h1>)
}
}

export default Ul;