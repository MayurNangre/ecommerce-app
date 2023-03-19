import React from 'react'
import { Link } from 'react-router-dom'

const Blogcard = () => {
  return (
    <div className='col-3'>
      <div className='blog-card'>
         <div className='card-image'> 
            <img src='images/blog-1.jpg' className='img-fluid' alt='blog'/>
         </div>
         <div className='blog-content'>
            <p className='date'>08 March, 2023</p>
            <h5 className='title'>Beautiful Sunday Morning raissance</h5>
            <p className='desc'>International Women's Day 2023: From Apple to Garmin, 5 smartwatches for here</p>
            <Link to="/" className='button'>Read More</Link>
         </div>
      </div>.
    </div>
  )
}

export default Blogcard