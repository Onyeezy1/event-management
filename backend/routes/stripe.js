const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const { event } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: event.title },
          unit_amount: event.price * 100,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success.html`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel.html`,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Stripe checkout failed' });
  }
});

module.exports = router;


