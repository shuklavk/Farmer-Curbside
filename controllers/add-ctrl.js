const Items = require('../models/items-model');

add = (req, res) =>
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
                res.json({'success': true, 'message': 'Contact has been added.'});
            }
            else
            {
                res.json({'success': false, 'message': 'Contact has not been added.'});
            }
        }
    )
};

module.exports = {add};