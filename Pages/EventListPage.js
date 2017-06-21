var Observable = require("FuseJS/Observable");
var Context = require("Modules/Context");
var ImageControl = require("Modules/ImageControl");

function goToMainMenu(){
	router.push("home");
}

module.exports={
	goToMainMenu:goToMainMenu,

	eventList:Context.eventList,

	imageURL:ImageControl.imageURL
};