var Observable = require("FuseJS/Observable");
var ImageControl = require("Modules/ImageControl");
var Context = require("Modules/Context");

var confirm_visible = Observable(false);
var confirm_not_visible = Observable(true);

var arg_save = null;

function goToEditHistory(arg){
	var history = arg.data;
	// console.log(history);
	router.push("editHistory", history);
}

function goToEventList(){
	router.push("eventList");
}

function addHistory(){
	Context.addHistory();
	Context.renew();
}

function confirm_visualization(arg){
	arg_save = arg;
	confirm_visible.value = true;
	confirm_not_visible.value = false;
}

function confirm_hidden(){
	confirm_visible.value = false;
	confirm_not_visible.value = true;
}

function deleteHistory(){
	var history = arg_save.data;
	Context.deleteHistory(history.id);
	Context.renew();
	confirm_hidden();
}

module.exports={
	histories:Context.histories,
	addHistory:addHistory,
	goToEditHistory:goToEditHistory,
	goToEventList:goToEventList,
	deleteHistory:deleteHistory,
	confirm_not_visible:confirm_not_visible,
	confirm_visible:confirm_visible,
	confirm_visualization:confirm_visualization,
	confirm_hidden:confirm_hidden,
	imageURL:ImageControl.imageURL
}