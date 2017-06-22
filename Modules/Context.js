var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var histories = Observable();
var historyEvents = Observable();
var eventList = Observable();

function renewHistories(){
	Backend.getHistories()
			.then(function(newHistories){
				histories.replaceAll(newHistories);
			})
			.catch(function(error){
				console.log("Couldn't get histories: "+error);
			});
}
renewHistories();

function renewHistoryEvents(id){
	Backend.getHistoryEvents(id)
			.then(function(newHistoryEvents){
				historyEvents.replaceAll(newHistoryEvents);
			})
			.catch(function(error){
				console.log("Couldn't get history events: "+error);
			});
}

function renewEventList(){
	Backend.getEventList()
			.then(function(newEventList){
				eventList.replaceAll(newEventList);
			})
			.catch(function(error){
				console.log("Couldn't get event list: "+error);
			});
}
renewEventList();

function updateHistory(id, date, comments){
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

function addHistoryEvent(historyId) {
	Backend.addHistoryEvent(historyId)
			.catch(function(error) {
				console.log("Couldn't add history event: "+error);
			});
}

function updateHistoryEvent(historyId, historyEventId, numPerSet, setNum) {
	Backend.updateHistoryEvent(historyId, historyEventId, numPerSet, setNum)
			.catch(function(error){
				console.log("Couldn't update history event: "+error);
			});
}

module.exports = {
	histories:histories,
	eventList:eventList,
	historyEvents: historyEvents,
	renewEventList: renewEventList,

	renewHistories: renewHistories,
	addHistory: addHistory,
	updateHistory: updateHistory,
	deleteHistory:deleteHistory,

	renewHistoryEvents:renewHistoryEvents,
	addHistoryEvent:addHistoryEvent,
	updateHistoryEvent:updateHistoryEvent
}