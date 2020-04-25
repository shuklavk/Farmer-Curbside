require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require("./config/config");
const passport = require("./config/passport");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');

config.connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		resave: false,
		saveUninitialized: false
	})
)
app.use(passport.initialize())
app.use(passport.session())

const authRouter = require("./routes/auth-router");

// morgan.token("id", function getId(req) {
//   return req.id;
// });

const Cat = mongoose.model('Cat', { name: String });

app.use('/auth', authRouter);
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.post('/api', (req, res) => {
    const body = req.body;
    const kitty = new Cat({
        name: body.name
    });
    kitty
        .save((error, res) => {
            if (error) {
                res.status(400);
                res.send('Failed to add a cat to the database');
            }
            else {
                res.status(200);
                res.send('Succesfully added a cat to the database');
            }
        })
        .then(() => {
            console.log('Cat added to the database');
        })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
})

app.listen(process.env.port || 8080, () => {
    console.log('Express app is running on port 8080');
});