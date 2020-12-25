import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './stripe-button.style.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;
  console.log(`KEY ********** ${publishableKey}`);
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
      <StripeCheckout
          label='Pay Now'
          name='Clothing'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is ${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
      />
  )
}

export default StripeCheckoutButton;