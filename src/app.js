const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

//init middleware
app.use(morgan('dev'));  	//log request to console
app.use(helmet());			//secure express app by setting various HTTP headers
app.use(compression());		//compress data sent to client

//init database

//init routes
app.get('/test', (req, res, next) => {
	const str = "Hello World!";
	return res.status(200).json({
		metadata: str.repeat(100000),
		message: "Welcome to E-commerce ExpressJS!",
	});
});

//handle errors

module.exports = app;