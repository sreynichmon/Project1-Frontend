import React from 'react';
import { Link } from 'react-router-dom';
import newsletter from "../images/newsletter.png";
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input 
                  type="text" 
                  className='form-control py-1' 
                  placeholder="Your Email Address" 
                  aria-label="Your Email Address" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
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
                  Sangkat Phnom Penh Tmey, <br /> Phnom Penh City <br /> Cambodia
                </address>
                <a href="tel: +855 1234567" className='mt-3 d-block mb-1 text-white'>
                  +855 1234567
                </a>
                <a href="mailto: fuyukistore@outlook.com" className='mt-2 d-block mb-0 text-white'>
                  fuyukistore@outlook.com
                </a>
                <div className='social icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' to=''>
                    <BsFacebook className='fs-4'/>
                  </a>
                  <a className='text-white' href='#'>
                    <BsTwitter className='fs-4'/>
                  </a>
                  <a className='text-white' href='#'>
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href='#'>
                    <BsPinterest className='fs-4'/>
                  </a>
                  <a className='text-white' href='#'>
                    <BsLinkedin className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="#" className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to="#" className='text-white py-2 mb-1'>Terms of Service</Link>
                <Link to="#" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="#" className='text-white py-2 mb-1'>Refund Policy</Link>
              </div>
            </div>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="#" className='text-white py-2 mb-1'>Search</Link>
                <Link to="#" className='text-white py-2 mb-1'>About Us</Link>
                <Link to="#" className='text-white py-2 mb-1'>FAQ</Link>
                <Link to="/Contact" className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container.xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()} | Created by Group 2
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;