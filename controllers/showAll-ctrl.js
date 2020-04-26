const Items = require('../models/items-model');

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

module.exports = {showAllFarmerItems};