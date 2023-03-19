import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Blogcard from '../components/Blogcard';
import Productcard from '../components/productcard';
import Specialproduct from '../components/specialproduct';
import Meta from '../components/Meta';

const Home = () => {
  return (
    <div>

      <Meta title="Home"/>

      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROPS.</h4>
                  <h5>iPad S13+ PRO</h5>
                  <p>From $999.000 or $49.21/mo</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-01.jpg' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED <br/> FOR PROPS.</h4>
                    <h5>iPad S13+ PRO</h5>
                    <p>From $999.000 <br/> or $49.21/mo</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-02.jpg' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED <br/> FOR PROPS.</h4>
                    <h5>iPad S13+ PRO</h5>
                    <p>From $999.000 <br/> or $49.21/mo</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-03.jpg' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED <br/> FOR PROPS.</h4>
                    <h5>iPad S13+ PRO</h5>
                    <p>From $999.000 <br/> or $49.21/mo</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg' className='img-fluid rounded-3'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED <br/> FOR PROPS.</h4>
                    <h5>iPad S13+ PRO</h5>
                    <p>From $999.000 <br/> or $49.21/mo</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service.png' alt='services'/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-02.png' alt='services'/>
                  <div>
                    <h6>Daily Surprice Offers</h6>
                    <p className='mb-0'>Save Upto 25% Off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-03.png' alt='services'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop With An Expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-04.png' alt='services'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-05.png' alt='services'/>
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg'/>
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg'/>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section className='feature-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />

          </div>
        </div>

      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card'>
                <img src='images/famous-1.webp' alt='famous'/>
                
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Collection</h3>
            </div>
            
            <Specialproduct/>
            <Specialproduct/>
            <Specialproduct/>

          </div>
        </div>

      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Popular Collection</h3>
            </div>
          </div>
          <div className='row'>
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />
            <Productcard
              src='images/watch.jpg'
              srcc='images/watch-1.jpeg'
            />
          </div>
        </div>

      </section>

      

      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee>
                <div className='mx-4 w-25'>
                  <img src='images/brand-01.png' alt=''/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-02.png' alt=''/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-03.png' alt=''/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-04.png' alt=''/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-05.png' alt=''/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-06.png' alt=''/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-07.png' alt=''/>
                </div>
                <div className='mx-4 w-25'>
                  <img src='images/brand-08.png' alt=''/>
                </div>
              </Marquee>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest News</h3>
            </div>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home