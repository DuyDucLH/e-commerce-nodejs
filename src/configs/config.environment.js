'use strict'

const DEV = {
	app: {
		port: process.env.DEV_APP_PORT,
	},
	database: {
		host: process.env.DEV_DB_HOST,
		port: process.env.DEV_DB_PORT,
		name: process.env.DEV_DB_NAME,
	}
}

const PRO = {
	app: {
		port: process.env.PRO_APP_PORT,
	},
	database: {
		host: process.env.PRO_DB_HOST,
		port: process.env.PRO_DB_PORT,
		name: process.env.PRO_DB_NAME,
	}
}

const config = {DEV, PRO};
const env = process.env.NODE_ENV || 'dev';
module.exports = config[env];