const mongoose = require('mongoose')

const pizzaSchema = mongoose.Schema({
    name :{
        type:String,
        reqired:true
    },
    varients : [],
    prices :[],
    category :{
        type:String,
        reqired:true

    },
    image:{
        type:String,
        reqired:true
    },
    description:{
        type:String,
        reqired:true
    }
},{timestamps:true}
);

const pizzaModel = mongoose.model('pizza',pizzaSchema)
module.exports = pizzaModel; 