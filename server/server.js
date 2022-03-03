const express = require('express');
require('colors')
const dotenv = require('dotenv');
const connectDB = require('./config/config')
const morgan = require('morgan');


dotenv.config();



connectDB()



const app = express();


app.use(express.json());
app.use(morgan('dev'));



app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.get("/" ,(req,res)=>{
    res.send("<h1>hello from node server via nodemon</h1>");
})



const port = process.env.PORT || 8080
app.listen(8080, ()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
})

