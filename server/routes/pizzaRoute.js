const express = require('express');
const router = express.Router();
const pizzaModel = require('../models/pizzaModel');

//GET ALL PIZZA || @GET REQUEST
router.get('/getAllPizzas', async (req,res) =>{
    try {
        const pizzas = await pizzaModel.find({})
        res.send(pizzas)
    } catch (error) {
        res.json({message : error})
    }
});

module.exports = router;