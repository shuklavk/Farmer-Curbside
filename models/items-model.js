const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Items = new Schema(
    {
        farmer_id: {type: Schema.Types.ObjectId, required: true},
        items: [
            {
                productName: {type: String, required: true},
                productDescription: {type: String},
                price: {type: String},
                quantity: {type: Number}
            }
        ]
    },
    {timestamps: true}
);

module.exports = mongoose.model('Items', Items)