import React from 'react'
import Breadcrumb from '../components/Breadcrum'
import {Helmet} from "react-helmet";
import Meta from '../components/Meta';

const Ourstore = () => {
  return (
    <div>
      <Meta title="Our Store"/>
      <Breadcrumb />

      <div className='store-wrapper home-wrapper-2 py-5'>
         <div className='container-xxl'> 
            <div className='row'>
               <div className='col-3'>
                  <div className='filter-card mb-3'>
                     <h3 className='filter-tile'>Shop by Categories</h3>
                     <div>
                        <ul className='ps-0'>
                           <li>Watch</li>
                           <li>Tv</li>
                           <li>Camera</li>
                           <li>Laptop</li>
                        </ul>
                     </div>
                  </div>
                  <div className='filter-card mb-3'>
                     <h3 className='filter-tile'>Filter By</h3>
                     <div>
                        <h5  className='sub-title'>Availability</h5>
                        <div>
                           <div className='form-check'>
                              <input className='form-check-input' type="checkbox" value="" id=''></input>
                              <label className='form-check-label' htmlFor="">In Stock(1)</label>
                           </div>
                           <div className='form-check'>
                              <input className='form-check-input' type="checkbox" value="" id='' ></input>
                              <label className='form-check-label' htmlFor="">Out of Stock(0)</label>
                           </div>
                        </div>
                        <h5  className='sub-title'>Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                           <div className="form-floating mb-3">
                              <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                              <label for="floatingInput">From</label>
                           </div>
                           <div className="form-floating mb-3">
                              <input type="email" className="form-control" id="floatingInput1" placeholder="To"/>
                              <label for="floatingInput1">To</label>
                           </div>
                        </div>
                        <h5  className='sub-title'>Colors</h5>
                        <div>
                           <ul className='colors ps-0'>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                           </ul>
                        </div>
                        <h5  className='sub-title'>Size</h5>
                        <div>
                           <div className='form-check'>
                              <input className='form-check-input' type="checkbox" value="" id='color-1'></input>
                              <label className='form-check-label' htmlFor="color-1">S (2)</label>
                           </div>
                           <div className='form-check'>
                              <input className='form-check-input' type="checkbox" value="" id='color-2'></input>
                              <label className='form-check-label' htmlFor="color-2">M (2)</label>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='filter-card mb-3'>
                     <h3 className='filter-tile'>Product tags</h3>
                  </div>
                  <div className='filter-card mb-3'>
                     <h3 className='filter-tile'>Random Product</h3>
                  </div>

               </div>

            </div>

         </div>

      </div>
    </div>
  )
}

export default Ourstore