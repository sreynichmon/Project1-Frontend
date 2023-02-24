import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
    
  return (
    <>
        <div className="col-4">
            <Link to="/" className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link to="/">
                        <img src='images/wish.svg' alt='wishlist' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='images/watch.jpg' alt='product image' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>G-Shock</h6>
                    <h5 className='product-title'>
                        gsdfjksdjhjsaakljhasjdgj
                    </h5>
                    <ReactStars
                        count={5} 
                        size={24} 
                        value="4" 
                        edit={false}
                        activeColor="#ffd700" 
                    />
                    <p className='price'>$99.99</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link to="/">
                            <img src='images/prodcompare.svg' alt='compare' />
                        </Link>
                        <Link to="/">
                            <img src='images/view.svg' alt='view' />
                        </Link>
                        <Link to="/">
                            <img src='images/add-cart.svg' alt='addcart' />
                        </Link>
                    </div>
                </div>
            </Link> 
        </div>
    </>
    
  )
}

export default ProductCard;