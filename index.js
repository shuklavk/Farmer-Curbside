require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require("./config/config");
const passport = require("./config/passport");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

config.connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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
const addRouter = require("./routes/add-router");
const showAllRouter = require("./routes/showAll-router");

app.use('/auth', authRouter);
app.use('/api', addRouter);
app.use('/api', showAllRouter);
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
})

app.use((err, req, res, next) => {
	res.status(422).send({ error: err._message });
});

app.listen(process.env.port || 8080, () => {
    console.log('Express app is running on port 8080');
});

process.on("SIGINT", () => {
	config.disconnectDB();
	process.exit(0);
});