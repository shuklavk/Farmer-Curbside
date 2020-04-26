const Items = require('../models/items-model');
const User = require('../models/user-model');
const mongoose = require('mongoose');

showAllFarmerItems = (req, res) =>
{
    Items.aggregate
    (
        [
            {$match: {"farmer_id": req.params.user_id}},
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
                res.json({'success': true, results: results});
            }
            else
            {
                res.json({'success': false, 'message': 'No search results.'});
            }
        }
    )
}

module.exports = {showAllFarmerItems, showAllItems};