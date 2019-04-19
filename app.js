const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
const { AppError } = require('./helpers');
const { dbHost } = require('./config');
const indexRouter = require('./routes');

const app = express();

// database
const dbOptions = { useNewUrlParser: true, useCreateIndex: true };
mongoose.connect(dbHost, dbOptions).catch(err => console.error(`Error connecting to DB:\n${err}`));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/images', express.static(__dirname + '/images'));


// router
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	throw new AppError(404, 'Route Not Found');
});

// error handler
app.use((err, req, res, next) => {

	if (err instanceof Error) {
		err = new AppError(500,
			{
				name: err.name,
				message: err.message,
				stack: err.stack.split('\n').map(e => e.trim()),
				user: req.user,
				path: req.path
			}, err.message)
	}

	res.status(err.status).json(err);
});

module.exports = app;
