import React from 'react'
import { FormBtn } from '../components/Form'
export const ListItem = props => {
  return props.articleSaved.length ? (
    <div>

      { props.articleSaved.map((article, index) => {
        return (

          <li className='list-group-item'>
            <h3>
              <span>
                <em>{article.topic}</em>
              </span>
              <span className='btn-group pull-right'>
                <a href={article.web_url} rel='noopener noreferrer' target='_blank'>
                  <FormBtn className='btn btn-primary' >View Article</FormBtn >
                </a>
                <FormBtn className='btn btn-danger'
                  onClick={() => props.deleteArticle(article._id)}
        >Delete</FormBtn >
              </span>
            </h3>
            <p />
          </li>)
      })}
    </div>
) : (
  <h3>No Results to Display</h3>
)
}

export default ListItem
