var rankings = ["A", "B", "C"];
for(var i=0, len=rankings.length; i<len; i++) {
	setTimeout(function() {
		console.log(i, rankings[i]);
	}(), i*10000);
}