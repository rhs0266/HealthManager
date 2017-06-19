var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var histories = Observable();

function renew(){
	Backend.getHistories()
			.then(function(newHistory){
				histories.replaceAll(newHistory);
			})
			.catch(function(error){
				console.log("Couldn't get histories: "+error);
			});
}
renew();


function updateHistory(id, date, comments){
	console.log("updated date: " + date);
	for (var i=0;i<histories.length;i++){
		var history=histories.getAt(i);
		if (history.id == id){
			history.date = date;
			history.comments = comments;
			histories.replaceAt(i, history);
			break;
		}
	}
	Backend.updateHistory(id, date, comments)
			.catch(function(erorr){
				console.log("Couldn't update history: "+error);
			});
}

function addHistory(){
	Backend.addHistory()
			.catch(function(error){
				console.log("Couldn't add history: "+error);
			});
}

function deleteHistory(id){
	Backend.deleteHistory(id)
			.catch(function(error){
				console.log("Couldn't delete history: "+error);
			});
}

module.exports = {
	histories:histories,
	renew: renew,
	addHistory: addHistory,
	updateHistory: updateHistory,
	deleteHistory:deleteHistory
}