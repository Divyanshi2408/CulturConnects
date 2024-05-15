// stripe.js
import Stripe from 'stripe';

const stripe = new Stripe('your_secret_key', {
  apiVersion: '2020-08-27', // Specify your desired API version
});

export { stripe };
