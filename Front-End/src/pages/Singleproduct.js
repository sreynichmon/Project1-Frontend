import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import Container from '../components/Container';

const Singleproduct = () => {
  const props = {
    width: 400, 
    height: 600, 
    zoomWidth: 600, 
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
  };
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
        <Meta title={"Product Name"} />
        <BreadCrumb title="Product Name" />
        <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                      <div className='main-product-image'>
                        <div>
                          <ReactImageZoom {...props} />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='main-product-details'>
                        <div className='border-bottom'>
                          <h3 className='title'>
                            Lorem ipsum dolor sit amet
                          </h3>
                        </div>
                        <div className='border-bottom py-3'>
                          <p className='price'>$ 100.00</p>
                          <div className='d-flex align-items-center gap-10'>
                            <ReactStars 
                              count={5}
                              size={24} 
                              value={4}
                              edit={false}
                              activeColor="#ffd700" 
                            />
                            <p className='mb-0 t-review'>( 2 Reviews )</p>
                          </div>
                          <a className='review-btn' href='#review'>Write a Review</a>
                        </div>
                        <div className='border-bottom'>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Types :</h3> 
                            <p className='product-data'>Watch</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Brands :</h3> 
                            <p className='product-data'>G-Shock</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Categories :</h3> 
                            <p className='product-data'>Watch</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Tags :</h3> 
                            <p className='product-data'>Watch</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Availability :</h3> 
                            <p className='product-data'>InStock</p>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Size :</h3> 
                            <div className='d-flex flex-wrap gap-15'>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                S
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                M
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                L
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                XXL
                              </span>
                            </div>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Color :</h3> 
                            <Colors />
                          </div>
                          <div className='d-flex  gap-15 flex-row mt-2 mb-3'>
                            <h3 className='product-heading'>Quantity :</h3> 
                            <div className=''>
                              <input 
                                type="number"
                                name=""
                                min={1}
                                max={10}
                                className="form-control"
                                style={{ width: "70px" }}
                                id=""
                              />
                            </div>
                          </div>
                          <div className='d-flex align-items-center gap-15'>
                            <a className="btn btn-primary" href="#" role="button">
                              Add to Cart
                            </a>
                            <a className="btn btn-primary" href="#" role="button">
                              Add to Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
        </Container>
        <Container class1='description-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
                <h4>Description</h4>
                <div className='bg-white p3'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </div>
            </div>
          </div>
        </Container>
        <Container class1='reviews-wrapper home-wrapper-2'>
            <div className='row'>
              <div className='col-12'>
                <h3 id='reviews'>Reviews</h3>
                <div className='review-inner-wrapper'>
                  <div className='review-head d-flex justify-content-between align-items-end'>
                    <div>
                      <h4 className='mb-2'>Customer Reviews</h4>
                      <div className='d-flex align-items-center gap-10'>
                        <ReactStars 
                          count={5}
                          size={24} 
                          value={4}
                          edit={false}
                          activeColor="#ffd700" 
                        />
                        <p className='mb-0'>Base on 3 reviews</p>
                      </div>
                    </div>
                    {
                      orderedProduct && (
                        <div>
                          <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                        </div>
                      )
                    }
                  </div>
                  <div className='review-form py-4'>
                    <h4>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <ReactStars 
                            count={5}
                            size={24} 
                            value={4}
                            edit={true}
                            activeColor="#ffd700" 
                          />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className='w-100 form-control'
                          cols="30"
                          rows="4"
                          placeholder='Comments'
                        ></textarea>
                      </div>
                      <div>
                      <button type="button" className="btn btn-secondary btn-lg">Send</button>
                      </div>
                    </form>
                  </div>
                  <div className='reviews mt-4'>
                    <div className='review'>
                      <div className='d-flex gap-10 align-items-center'>
                        <h6 className='mb-0'>User A</h6>
                        <ReactStars 
                          count={5}
                          size={24} 
                          value={4}
                          edit={false}
                          activeColor="#ffd700" 
                        />
                      </div>
                      <p className='mt-3'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>
        <Container class1='bestpro-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Best Selling Products</h3>
            </div>
            <ProductCard />
          </div>
      </Container>

    </>
  )
}

export default Singleproduct;