var Observable = require("FuseJS/Observable");

var Context = require("Modules/Context");

function goToHistory(arg){
	var history = arg.data;
	router.push("editHistory", history);
}

function addHistory(){
	Context.addHistory();
	Context.renew();
}

function deleteHistory(){
	Context.deleteHistory(history.value.id);
	router.goBack();
}

module.exports={
	histories:Context.histories,
	addHistory:addHistory,
	goToHistory:goToHistory,
	deleteHistory:deleteHistory
}