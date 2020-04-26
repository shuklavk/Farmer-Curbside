const Items = require('../models/items-model');
const Purchase = require('../models/purchase-model');

addItem = (req, res) =>
{
    let item = req.body;

    Items.update
    (
        {farmer_id: req.params.user_id},
        {$push: {items: item}},
        {upsert: true}, 
        (err, result) =>
        {
            if (err)
            {
                res.json({'success': false, 'message': 'An error has occurred.'});
            }

            if (result.n > 0)
            {
                res.json({'success': true, 'message': 'Item has been added.'});
            }
            else
            {
                res.json({'success': false, 'message': 'Item has not been added.'});
            }
        }
    )
};

addPurchase = (req, res) => {
    let purchase = req.body;

    Purchase.update
    (
        {buyer_id: req.params.user_id,
        farmer_id: purchase.farmer_id,
        item_id: purchase.item_id},
        purchase,
        {upsert: true},
        (err, result) =>
        {
            if (err)
            {
                res.json({'success': false, 'message': 'An error has occurred.'});
            }
            console.log(result)
            if (result === null)
            {
                res.json({'success': true, 'message': 'Purchase has been added.'});
            }
            else
            {
                res.json({'success': false, 'message': 'Purchase has not been added.'});
            }
        }
    )
}

module.exports = {addItem, addPurchase};