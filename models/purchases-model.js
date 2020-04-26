const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Purchases = new Schema(
    {
        buyer_id: {type: String, required: true},
        purchases: [
            {
                product_id: {type: String, required: true},
                quantity: {type: Number, required: true},
                ready
            }
        ]
    },
    {timestamps: true}
);

module.exports = mongoose.model('Purchases', Purchases)