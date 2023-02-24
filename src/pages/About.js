import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const About = () => {
  return (
    <>
      <Meta title={"About "} />
      <BreadCrumb title="About " />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          
            <div className='col-12 mt-5'>
            <div className='center'>
                  <h2>About Us</h2>
                </div>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                </div>
                <div>
                  <h3 className='contact-title'>Get in touch with us</h3>
                  
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default About;