'use strict'

const mongoose = require('mongoose');
const os  = require('os');
const process = require('process');
const _SECONDS = 5000;

//Get number of current connections
const numberConnections = () => {
	let count = mongoose.connections.length;
	console.log(`Number connection to MongoDB: ${count}`);
}

//Check over load
const checkOverLoad = () => {
	setInterval(() => {
		const numberConnections = mongoose.connections.length;
		const numCores = os.cpus().length;
		const memoryUsage = process.memoryUsage().rss;
		const maxConnections = numCores * 2; //Assume that each core can handle 2 connections

		console.log(`Active connection: ${numberConnections}, max connection: ${maxConnections}`);
		console.log(`Memory usage: ${memoryUsage / 1024 / 1024}MB`);

		if(numberConnections > maxConnections){
			console.log(`Overload! Number connection to MongoDB: ${numberConnections}`);
		}
	}, _SECONDS); //Monitor every 5 seconds
}

module.exports = {
	numberConnections,
	checkOverLoad
}