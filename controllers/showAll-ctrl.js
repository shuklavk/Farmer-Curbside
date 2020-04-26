const Items = require('../models/items-model');
const Purchase = require('../models/purchase-model');
const mongoose = require('mongoose');

showAllFarmerItems = (req, res) =>
{
    Items.aggregate
    (
        [
            {$match: {"farmer_id": mongoose.Types.ObjectId(req.params.user_id)}},
            // {$unwind: "$items"}
        ],
        (err, results) =>
        {
            if (err)
            {
                res.json({'success': false, 'message': 'An error has occurred.'});
            }
            
            if (results != "")
            {
                res.json({'success': true, results: results});
            }
            else
            {
                res.json({'success': false, 'message': 'No search results.'});
            }
        }
    )
};

showAllItems = (req, res) => {
    Items.aggregate(
        [
            {
                $lookup: {
                    from: "users",
                    localField: "farmer_id",
                    foreignField: "_id",
                    as: "farmer_info"
                }
            }
        ],
        (err, results) => {
            if (err)
            {
                res.json({'success': false, 'message': 'An error has occurred.'});
            }
            
            if (results != "")
            {
                let farmer = {};
                let newList = [];
                let outerLength = results.length;
                let ind = null;
                results.forEach((result, index) => {
                    farmer = result.farmer_info[0];
                    ind = index;
                    result.items.forEach((resu, i) => {
                        resu.farmer = farmer;
                        console.log('loggin resu');
                        console.log(resu);
                        newList.push(resu);
                        console.log('lengths');
                        console.log(result.items.length);
                        console.log(result.length);
                        if (i == result.items.length - 1 && ind === outerLength - 1) {
                            res.json({'success': true, results: newList});
                        }
                    })
                })
            }
            else
            {
                res.json({'success': false, 'message': 'No search results.'});
            }
        }
    )
}

showAllPurchases = (req, res) =>
{
    Purchase.aggregate
    (
        [
            {$match: {"buyer_id": mongoose.Types.ObjectId(req.params.user_id)}},
            {
                $lookup: {
                    from: "users",
                    localField: "farmer_id",
                    foreignField: "_id",
                    as: "farmer"
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "buyer_id",
                    foreignField: "_id",
                    as: "buyer"
                }
            }
        ],
        (err, results) =>
        {
            if (err)
            {
                res.json({'success': false, 'message': 'An error has occurred.'});
            }
            
            if (results != "")
            {
                res.json({'success': true, results: results});
            }
            else
            {
                res.json({'success': false, 'message': 'No search results.'});
            }
        }
    )
};

module.exports = {showAllFarmerItems, showAllItems, showAllPurchases};