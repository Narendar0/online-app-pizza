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


app.use('/api/users',require("./routes/userRoutes"));
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/orders', require('./routes/orderRoute'));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, "/client/build")))
  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname+"client/build/index.html"))
  });
  }else{
    app.get("/", (req, res) => {
      res.send("<h1>Welcome To Node Server</h1>");
    });
  }
  


const port = process.env.PORT || 8080
app.listen(8080, ()=>{
    console.log(
        `Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
        .bgMagenta.white
        );
});

