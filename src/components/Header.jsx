import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div>
      <header className='header-top-strip'>
        <div className='container-xxl'>

          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free shipping over</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0' >
                Hotline: <a className='text-white' href='+91 9478564321'>+91 9478564321</a>
              </p>
            </div>
          </div>

        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>

          <div className='row align-item-center'>

            <div className='col-2'>
              <h2>
                <Link className='text-white'>Dev Conner</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-2" 
                  placeholder="Search items here..." 
                  aria-label="Search items here..." 
                  aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-link d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <img src='images/compare.svg' alt='compare'/>
                    <p className='mb-0'>compare <br/> product </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <img src='images/wishlist.svg' alt='wishlist'/>
                    <p className='mb-0'>compare <br/> product </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <img src='images/user.svg' alt='user'/>
                    <p className='mb-0'>compare <br/> product </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <img src='images/cart.svg' alt='cart'/>
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark '>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
                

              </div>
            </div>

          </div>

        </div>
      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  
                <div class="dropdown">
                  <button 
                    class="btn btn-secondary dropdown-toggle bg-transparent border-0 g-15 d-flex align-items-center " 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    >
                    <img src='images/menu.svg'/> 
                    <span className='me-3 d-inline-block'>Shop Categories</span>
                    
                  </button>
                  <ul class="dropdown-menu">
                    <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                  </ul>
                </div>

                </div>
                <div className='menu-links'>
                  <div className='d-flex align-item-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Store">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>

                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </header>
    </div>
  )
}

export default Header