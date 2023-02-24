import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Colors from '../components/Colors';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';



const OurStore = () => {
  return (
    <>
        <Meta title={"Our Store"} />
        <BreadCrumb title="Our Store" />
        <div className='store-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Laptop</li>
                                    <li>Watch</li>
                                    <li>Camera</li>
                                    <li>TV</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                                <div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type="checkbox" 
                                            value="" 
                                            id="" 
                                        />
                                        <label className='form-check-label' htmlFor="">
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type="checkbox" 
                                            value="" 
                                            id="" 
                                        />
                                        <label className='form-check-label' htmlFor="">
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='form-floating'>
                                        <input 
                                            type="email" 
                                            className='form-control'
                                            id="floatingInput" 
                                            placeholder="From" 
                                        />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className='form-floating'>
                                        <input 
                                            type="email" 
                                            className='form-control'
                                            id="floatingInput1" 
                                            placeholder="To" 
                                        />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Colors</h5>
                                <div>
                                    <Colors />
                                </div>
                                <h5 className='sub-title'>Sizes</h5>
                                <div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type="checkbox" 
                                            value="" 
                                            id="color-1" 
                                        />
                                        <label className='form-check-label' htmlFor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type="checkbox" 
                                            value="" 
                                            id="color-2" 
                                        />
                                        <label className='form-check-label' htmlFor="color-2">
                                            M (2)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input 
                                            className='form-check-input' 
                                            type="checkbox" 
                                            value="" 
                                            id="color-3" 
                                        />
                                        <label className='form-check-label' htmlFor="color-3">
                                            L (2)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tags</h3>
                            <div>
                                <div className='product-tages d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Headphone
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        TV
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Watch
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Laptop
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{ width: "100px"}}> Sort By:</p>
                                    <select name='' className='form-control form-select' id="">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">
                                            Best Selling
                                        </option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">
                                            Alphabetically, A-Z
                                        </option>
                                        <option value="price-ascending">
                                            Price, low to high
                                        </option>
                                        <option value="price-descending">
                                            Price, high to low
                                        </option>
                                        <option value="created-ascending">
                                            Date, old to new
                                        </option>
                                        <option value="created-descending">
                                            Date, new-old
                                        </option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>21 Products</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default OurStore;