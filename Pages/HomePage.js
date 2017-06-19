var Observable = require("FuseJS/Observable");

var Context = require("Modules/Context");

function goToHistory(arg){
	var history = arg.data;
	// console.log(history);
	router.push("editHistory", history);
}

function addHistory(){
	Context.addHistory();
	Context.renew();
}

function deleteHistory(arg){
	var history = arg.data;
	console.log(history.id);
	Context.deleteHistory(history.id);
	Context.renew();
}

module.exports={
	histories:Context.histories,
	addHistory:addHistory,
	goToHistory:goToHistory,
	deleteHistory:deleteHistory
}