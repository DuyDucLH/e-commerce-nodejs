const app = require("./src/app");
const {app: {port}} = require('./src/configs/config.environment')

const server = app.listen(port, () => {
	console.log("Server is running on port: " + port);
});

process.on("SIGINT", () => {	//handle ctrl + c
	server.close(() => console.log("Exit Server Express!"));
	// process.exit();
})