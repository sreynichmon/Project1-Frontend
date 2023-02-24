import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi"

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us "} />
      <BreadCrumb title="Contact Us " />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706603336374!2d104.88850131459685!3d11.568291891787181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1676961905689!5m2!1sen!2skh" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                        type="text" 
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        className='form-control'
                        placeholder='Phone Number'
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
                    <button type="button" class="btn btn-secondary btn-lg">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Sangkat Phnom Penh Tmey, Phnom Penh City, Cambodia
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel: +855 1234567">
                          +855 1234567
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto: fuyukistore@outlook.com">
                          fuyukistore@outlook.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Opening Hours: Monday - Friday 09:00AM - 10:00PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;