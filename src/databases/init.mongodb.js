'use strict'

const mongoose = require('mongoose');
const connectString = 'mongodb://localhost:27017/ecommerce';
const { numberConnections } = require('../helpers/check.connect');

class Database {

	constructor() {
		this.connect();
	}

	connect(type = 'mongodb') {
		if (true) {	//dev
			mongoose.set('debug', true);
			mongoose.set('debug', { color: true })
		}

		mongoose.connect(connectString)
			.then(_ => {
				console.log(`Connected to MongoDB successfully!`)
				numberConnections();
			})
			.catch(err => console.log(err));
	}

	static getInstance() {	//Singleton Design Pattern
		if (!this.instance) {
			this.instance = new Database();
		}
		return this.instance;
	}
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;