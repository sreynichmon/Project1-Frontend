import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import CustomerInput from '../components/CustomerInput';
import Meta from '../components/Meta';

const Login = () => {
  return (
    <>
        <Meta title={"Login"} />
        <BreadCrumb title="Login" />

        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Login</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomerInput type='email' name='email' placeholder='Email'/>
                            <CustomerInput type='password' name='password' placeholder='Password' />
                            <div>
                                <Link to="/Forgotpassword">Forgot Password?</Link>

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button type="button" className="btn btn-secondary btn-sm">Login</button>
                                <a className="btn btn-secondary btn-sm" href="/Signup" role="button">Sign Up</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Login;