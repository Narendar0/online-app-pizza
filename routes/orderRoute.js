const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")("sk_test_51KaYbbSC6FLKdgwTB9l9IAzQYsc5a7Ax5f76KORDCn3wbW4BPtNkuNXtF3OK0vJSUhtnGI9EQ8h0i3F3LRA7fVrY00DHtR3eNK");

  const Order = require("../models/orderModel");


  router.post("/placeorder", async (req, res) => {
    const { token, subTotal, currentUser, cartItems } = req.body;
    try {
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
      const paymentIntents = await stripe.paymentIntents.create(
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
      if (paymentIntents) {
        const newOrder = new Order( {
          name: currentUser.name,
          email: currentUser.email,
          userid: currentUser._id,
          orderItems: cartItems,
          orderAmount: subTotal,
          shippingAddress: {
            street: token.card.address_line1,
            city: token.card.address_city,
            country: token.card.address_country,
            picode: token.card.address_zip,
          },
          transectionId: payment.source.id,
        });

        newOrder.save()
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
