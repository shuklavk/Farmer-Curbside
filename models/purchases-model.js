const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Purchases = new Schema(
    {
        buyer_id: {type: Schema.Types.ObjectId, required: true},
        farmer_id: {type: Schema.Types.ObjectId, required: true},
        item_id: {type: Schema.Types.ObjectId, required: true},
        quantity: {type: Number, required: true},
        readyPickup: {type: Boolean, required: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Purchases', Purchases)