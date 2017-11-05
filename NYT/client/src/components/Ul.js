
import React from 'react'
const Ul = (props)=>{


return props.article.map(function(article, index) {


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
        <button className="btn btn-primary">Save</button>
    </span>
</h3>
<p>

</p>
    </li>    </div>
    )
})
}

export default Ul;