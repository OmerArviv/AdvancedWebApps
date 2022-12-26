const express = require('express');
const app = express();
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const Product = require('./models/product');
const http = require('http').Server(app);
require('dotenv/config');


const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration


const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))


//Routers
const productsRoute = require('./routes/products');

// var orders = []
// app.post('/', (req, res) => {
//     orders = req.body            //POST request
//     console.log(orders)
// });


const { json } = require('body-parser');


app.use('/products', productsRoute)


mongoose.connect(`mongodb${process.env.prod}://${process.env.dbUser}:${process.env.dbPass}@${process.env.dbHost}`)
http.listen(process.env.PORT);
