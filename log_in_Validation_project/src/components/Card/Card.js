import React from 'react';
import './Card.css'

const Card=(props)=>{

     return (

          <div className="container">


<div className="content">

{props.children} 


     </div>
          </div>
     )
}
export default Card