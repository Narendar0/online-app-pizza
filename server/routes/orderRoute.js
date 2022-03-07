const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
    "sk_test_51KaYbbSC6FLKdgwTB9l9IAzQYsc5a7Ax5f76KORDCn3wbW4BPtNkuNXtF3OK0vJSUhtnGI9EQ8h0i3F3LRA7fVrY00DHtR3eNK"
  );

  const Order = require("../models/orderModel");


  router.post("/placeorder", async (req, res) => {
    const { token, subTotal, currentUser, cartItems } = req.body;
    try {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
      const payment = await stripe.charges.create(
        {
          amount: subTotal * 100,
          currency: "INR",
          customer: customer.id,
          receipt_email: token.email,
        },
        {
          idempotencyKey: uuidv4(),
        }
      );
      if (payment) {
        res.send("Payment Success");
      } else {
        res.send("Payment Failed");
      }
    } catch (error) {
      res.status(400).json({
        message: "Something went wrong",
        error:error.stack,
      });
    }
  });

  module.exports = router;
