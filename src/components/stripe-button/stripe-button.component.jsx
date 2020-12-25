import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './stripe-button.style.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I2KJGEnTaeTiexnqUIVh2L20ctW5BMui77gqiZdf6JnoRWB1I7HvBokDy0CQ1Ktnp9KStBc2wmLi0l8aUsIAnbA00Rv7Xzqan';
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