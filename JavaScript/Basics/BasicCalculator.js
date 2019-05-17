/*
	This one is to implement basic calculator functions for finding say Square, SquareRoot and Cube of a number by default, i.e. if power is unspecified.
	and also if power is sqecified, then gives n^p. 
*/

function calculator(n, p) {
	if(p == ""){	//default Set of Properties
		this.square = function() {
			return Math.pow(n, 2);
		}
		this.cube = function() {
			return Math.pow(n, 3);
		}
		this.sqrt = function() {
			return Math.sqrt(n);
		}
	}
	else{  //In case power is specified
		this.cal = function() {
			return Math.pow(n, p);
		}
	}
}

calculator.prototype.results = function() {
	if(b == ""){
		console.log(this.square());
		console.log(this.cube());
		console.log(this.sqrt());
	}else{
		console.log(this.cal());	
	}
}

var a = prompt("Enter a number");
var b = prompt("Enter a power:Enter -1 if you want default");
var res = new calculator(a, b);
res.results();