import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {placeOrder} from '../actions/orderAction'

const Checkout = ({subTotal}) => {

    const dispatch = useDispatch()
    const tokenHandler = (token) => {
        dispatch(placeOrder(token,subTotal));
         console.log(token)
    };
  return (
  <StripeCheckout
  amount={subTotal * 100}
  shippingAddress
  token={tokenHandler}
  stripeKey="pk_test_51KaYbbSC6FLKdgwT8aVdQv9imVJG2BaXCwjYOMLysnxi5gK7R7hLbbWLMRKxwXZ12AGF59Jm3qV8vaINCFBoWWfl00XOTAEVCv"
  currency='INR'
>
      <Button> Pay Now</Button>
  </StripeCheckout>
  );
};

export default Checkout