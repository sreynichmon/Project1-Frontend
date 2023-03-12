import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <>
        <Meta title={"Cart"} />
        <BreadCrumb title="Cart" />
        <Container class1='cart-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img 
                                    src={watch} 
                                    className="img-fluid"
                                    alt='product' />
                            </div>
                            <div className='w-75'>
                                <p>hdsfsfdsh</p>
                                <p>Size: ghh</p>
                                <p>Color: jhd</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$ 100</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input 
                                    className='form-control'
                                    type="number" 
                                    name="" 
                                    id="" 
                                    min={1}
                                    max={10}
                                />
                            </div>
                            <div>
                                <AiFillDelete className='text-danger'/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>$ 100</h5>
                        </div>
                    </div>
                </div>
                <div className='col-12 py-2 mt-4'>
                    <div className='d-flex justify-content-between align-items-baseline'>
                        <a className="btn btn-dark" href="/product" role="button">Continue Shopping</a>
                        <div className='d-flex flex-column align-items-end'>
                            <h4>SubTotal: $ 100</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <a className="btn btn-dark" href="/checkout" role="button">checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  );
};

export default Cart;