var Context = require("Modules/Context");
var ImageControl = require("Modules/ImageControl");

var history = this.Parameter;


var date = history.map(function(x){ return x.date; });
var comments = history.map(function(x){ return x.comments; });

function goBack(){
	history.value = history.value;
	router.goBack();
}

function save(){
	Context.updateHistory(history.value.id, date.value, comments.value);
	router.goBack();
}

function addHistoryEvent(){
	Context.addHistoryEvent(history.value.id);
	Context.renewHistoryEvents(history.value.id);
}

function renewHistoryEvents(){
	Context.renewHistoryEvents(history.value.id);
}

function mapOptions() {
	var mapped = [];
	for (var i=0;i<Context.eventList.length;i++){
		var t=Context.eventList.getAt(i);
		mapped.push({label: t.name});
	}

	return mapped;
};

module.exports = {
	history:history,
	historyEvents:Context.historyEvents,
	eventList:Context.eventList,
	eventListOpts:mapOptions(),
	date: date,
	comments: comments,

	save: save,
	goBack: goBack,
	imageURL:ImageControl.imageURL,

	addHistoryEvent:addHistoryEvent,
	renewHistoryEvents:renewHistoryEvents
};