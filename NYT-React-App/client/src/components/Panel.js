import React from 'react'
import Ul from '../components/Ul'
const Panel = (props) => {
  let article = props.article
  let found = props.found

  return props.found ? (
 (<div className='container'>
   <div className='main-container'>
     <div className='row'>
       <div className='col-lg-12'>
         <div className='panel panel-primary'>
           <div className='panel-heading'>
             <h1 className='panel-title'>
               <strong><i className='fa fa-list-alt' />

               </strong>
             </h1>
           </div>
           <div className='panel-body'>
             <ul className='list-group'>
               <div>
                 <li className='list-group-item'>
                   <Ul article={article}
                     found={found} />
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
) : (<h1> No Result..</h1>)
}
export default Panel
