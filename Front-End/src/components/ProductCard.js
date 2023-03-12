import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import watch from "../images/watch.jpg";

const ProductCard = () => {
    
  return (
    <>
        <div className="col-4">
            <Link to="product/:id" className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent'>
                        <img src={wish} alt='wishlist' />
                    </button>
                </div>
                <div className='product-image'>
                    <img src={watch} alt='product' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>G-Shock</h6>
                    <h5 className='product-title'>
                        gsdfjksdjhjsaakljhasjdgj
                    </h5>
                    <ReactStars
                        count={5} 
                        size={24} 
                        value={4} 
                        edit={false}
                        activeColor="#ffd700" 
                    />
                    <p className='price'>$99.99</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                            <img src={prodcompare} alt='compare' />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={view} alt='view' />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={addcart} alt='addcart' />
                        </button>
                    </div>
                </div>
            </Link> 
        </div>
    </>
    
  )
}

export default ProductCard;