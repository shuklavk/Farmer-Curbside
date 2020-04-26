const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Purchase = new Schema(
    {
        buyer_id: {type: Schema.Types.ObjectId, required: true},
        farmer_id: {type: Schema.Types.ObjectId, required: true},
        item_id: {type: Schema.Types.ObjectId, required: true},
        item: {type: Object, required: true},
        quantity: {type: Number, required: true},
        readyPickup: {type: Boolean, required: true},
        parkingSpot: {type: String},
        fulfilled: {type: Boolean}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Purchase', Purchase)