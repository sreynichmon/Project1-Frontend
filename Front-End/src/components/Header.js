import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className="container-xxl">
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Your trustworthy tech store</p>
            </div>
            <div className='col-6'>
              <p className="text-end text-white mb-0">
                Contact us: <a className='text-white' href='tel: +855 1234 5678'>+855 1234 5678</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to="/" className='text-white'>Fuyuki Store</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input 
                  type="text" 
                  className='form-control py-2' 
                  placeholder="Search" 
                  aria-label="Search" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                
                <div>
                  <Link to="/Wishlist" className='d-flex align-items-center gap-10 text-white'>
                    <img src={wishlist} alt="wishlist" />
                    <p className='mb-0'>
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/Login" className='d-flex align-items-center gap-10 text-white'>
                    <img src={user} alt="user" />
                    <p className='mb-0'>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                <Link to="/" className='d-flex align-items-center gap-10 text-white'>
                    <img src={cart} alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$0.00</p>
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
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;