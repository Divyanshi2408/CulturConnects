const express = require('express');
const router = express.Router();
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

router.post('/charge', async (req, res) => {
  try {
    const { amount, currency, paymentMethodId } = req.body;

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
