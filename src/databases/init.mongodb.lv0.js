'use strict'

const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/ecommerce';
mongoose.connect(connectString)
	.then(_ => {
		console.log(`Connected to MongoDB successfully!`);
	})
	.catch(err => {
		console.log(err);
	});

//dev
if(true){
	mongoose.set('debug', true);
	mongoose.set('debug', {color: true})
}

module.exports = mongoose;