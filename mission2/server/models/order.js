const mongoose = require('mongoose');
const Product = require('./product').schema;

var schema = mongoose.Schema({
    products: [{             // List of all products - include quantity
        prod: {              //the product
            type: Product,
            required: true
        },
        qty: {              // quantity
            type: Number,
            required: true
        }
    }]
}, {
    versionKey: false,
    timestamps: true
}
);

module.exports = mongoose.model("Order", schema, "Order");