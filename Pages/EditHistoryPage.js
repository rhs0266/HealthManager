var Context = require("Modules/Context");

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

module.exports = {
	history:history,
	date: date,
	comments: comments,

	goBack: goBack,
	save: save
};