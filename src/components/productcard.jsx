import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Productcard = (props) => {
  return (
    <div className='col-3'>
      <Link className='product-card position-relative'>
         <div className='wishlist-icon position-absolute'>
            <Link>
               <img src='images/wish.svg' alt='wish'/>
            </Link>
         </div>
         <div className='product-image'>
            <img className='img-fluid' src={props.src} alt='product image'/>
            <img className='img-fluid' src={props.srcc} alt='product image'/>
         </div>
         <div className='product-details'>
            <h6 className='brand'>havels</h6>
            <h5 className='product-title'>Kids Headphones Bulk 10 Pack Multi Colored Student</h5>
            <ReactStars
               value={3}
               edit={false}
               count={5}
               size={24}
               activeColor="#ffd700"
            />
            <p className='price'>$100.00</p>
         </div>

         <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
               <Link>
                  <img src='images/prodcompare.svg' alt='compare'/>
               </Link>
               <Link>
                  <img src='images/view.svg' alt='compare'/>
               </Link>
               <Link>
                  <img src='images/add-cart.svg' alt='compare'/>
               </Link>

            </div>

         </div>

      </Link>
      
    </div>
  )
}

export default Productcard