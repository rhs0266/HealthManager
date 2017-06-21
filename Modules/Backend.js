
var histories = [
	{
		id: 0,
		// category: 0,
		date: "17-06-01",
		comments: "",
		events: []
	},
	{
		id: 1,
		// category: 0,
		date: "17-06-02",
		comments: "",
		events: []
	},
	{
		id: 2,
		// category: 0,
		date: "17-06-01",
		comments: "",
		events: []
	}
];

var eventList = [
{
	id: 0,
	name: "팔굽혀펴기",
	label: "개수",
	// numPerSet: 0, // 1 set 당 몇 번
	// setNum: 0 // set 개수
},
{
	id: 1,
	name: "스쿼트",
	label: "개수",
	// numPerSet: 0, // 1 set 당 몇 번
	// setNum: 0 // set 개수
},
{
	id: 2,
	name: "플랭크",
	label: "시간(초)",
	// numPerSet: 0, // 1 set 당 몇 초
	// setNum: 0 // set 개수
},
{
	id: 3,
	name: "사이드 레터럴 레이즈",
	label: "개수",
	// numPerSet: 0, // 1 set 당 몇 번
	// setNum: 0 // set 개수
}];

function findById(id, arr){
	for (var i=0;i<arr.length;i++){
		if (arr[i].id == id){
			return arr[i];
		}
	}
	return null;
}

function getHistories(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(histories.slice(0).reverse());
		}, 0);
	});
}

function getEventList(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(eventList);
		}, 0);
	});
}

function addHistory(){
	return new Promise(function(resolve, reject){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var hour = d.getHours();
		var min = d.getMinutes();
		var today = (year%100)+"-"+(month<10?'0':'')+month+"-"+day;
		// console.log(year+"-"+month+"-"+day+", "+hour+":"+min);
		for (var i=0;i<histories.length;i++){
			var history = histories[i];
			if (history.date == today){
				// already added today
				return;
			}
		}

		var newId=0;
		for (;;newId++){
			if (findById(newId,histories) == null) break;
		}
		histories.push({
			id:newId,
			date:today,
			comments:"오늘도 운동을 하셨군요! ^_^",
			events:[]
		});
	});
}

function updateHistory(id, date, comments, events){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			var history = findById(id, histories);
			if (history==null){
				reject();
				return;
			}
			history.date = date;
			history.comments = comments;
			history.events = events;

			resolve();
		}, 0);
	});
}

function deleteHistory(id){
	return new Promise(function(resolve, reject){
		for (var i=0;i<histories.length;i++){
			var history=histories[i];
			if (history.id==id){
				histories.splice(i,1);
				break;
			}
		}
	});
}


function getHistoryEvents(id){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			var history = findById(id, histories);
			if (history == null){
				reject();
				return;
			}
			resolve(history.events);
		}, 0);
	});
}

function addHistoryEvent(historyId, eventId){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			var history = findById(historyId, histories);
			var historyEvents = history.events;
			var event = findById(eventId, eventList);

			var newId = 0;
			for (;;newId++){
				if (findById(newId,histories) == null) break;
			}

			historyEvents.push({
				id: newId,
				event_id: event.id,
				name: event.name,
				label: event.label,
				numPerSet: 0,
				setNum: 0
			});
		},0);
	});
}

function updateHistoryEvent(historyId, historyEventId, numPerSet, setNum) { // {0} 기록의 {1} 운동에 대한 정보를 {2}, {3} 으로 변경하라
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			var history = findById(historyId, histories);
			if (history == null){
				reject();
				return;
			}
			var historyEvent = findById(historyEventId, history.events);
			if (historyEvent == null){
				reject();
				return 0;
			}
			historyEvent.numPerSet = numPerSet;
			historyEvent.setNum = setNum;
		}, 0);
	})
}

module.exports={
	getHistories:getHistories,
	addHistory:addHistory,
	updateHistory:updateHistory,
	deleteHistory:deleteHistory,

	getEventList:getEventList,

	getHistoryEvents:getHistoryEvents,
	addHistoryEvent:addHistoryEvent,
	updateHistoryEvent:updateHistoryEvent
};