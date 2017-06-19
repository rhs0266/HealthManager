
var histories = [
	{
		id: 0,
		name: "팔굽혀펴기",
		num: 100,
		date: "17-06-01",
		comments: ""
	},
	{
		id: 1,
		name: "윗몸일으키기",
		num: 50,
		date: "17-06-02",
		comments: ""
	},
	{
		id: 2,
		name: "덤벨",
		num: 150,
		date: "17-06-01",
		comments: ""
	}
];

function getHistories(){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(histories.slice(0).reverse());
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
				// already add today
				return;
			}
		}

		var newId=1;
		for (newId=1;;newId++){
			var flag=0;
			for (var i=0;i<histories.length;i++){
				var history=histories[i];
				if (history.id==newId){
					flag=1;
					break;
				}
			}
			if (flag==0) break;
		}
		histories.push({
			id:newId,
			name:"New",
			num:0,
			date:today,
			comments:"오늘도 운동을 하셨군요! ^_^"
		});
	});
}

function updateHistory(id, date, comments){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			for (var i=0;i<histories.length;i++){
				var history = histories[i];
				if (history.id == id){
					history.date = date;
					history.comments = comments;
					break;
				}
			}

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

module.exports={
	getHistories:getHistories,
	addHistory:addHistory,
	updateHistory:updateHistory,
	deleteHistory:deleteHistory
};