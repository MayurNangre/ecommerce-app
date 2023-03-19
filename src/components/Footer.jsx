import React from 'react'
import { Form, Link } from 'react-router-dom'
import {BsInstagram,BsLinkedin,BsYoutube,BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newletter'/>
                <p className='mb-0 text-white'>SignUp for Newsletter</p>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Search items here..." 
                  aria-label="Search items here..." 
                  aria-describedby="basic-addon2"/>
                  <span className="input-group-text p-2" id="basic-addon2">
                  SUBSCRIBE
                  </span>
              </div>
            </div>

          </div>

        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno: 277, vill chopal <br/> Sonipat, Harayana <br/> Pincode : 456923 
                </address>
                <a href='tel: +91 7465893269' 
                   className='mt-3 d-block mb-1 text-white'>
                  +91 7465893269
                </a>
                <a href='mailto : nangre.mayur1182000@gmail.com'
                   className='mt-2 d-block mb-0 text-white'>
                  nangre.mayur1182000@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href=''>
                    <BsGithub className='fs-4'/>
                  </a>
                  <a className='text-white' href=''>
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className='text-white' href=''>
                    <BsYoutube className='fs-4'/>
                  </a>
                  <a className='text-white' href=''>
                    <BsInstagram className='fs-4'/>
                  </a>
                </div>

              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Redund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Acount</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Link</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>

          </div>

        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}: Powered by Developer's Corner
              </p>
            </div>

          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer