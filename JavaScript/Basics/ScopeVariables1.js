var a = prompt("Enter first number!");
var b = prompt("Enter second number");

function compare(){
	a = parseInt(a);
	b = parseInt(b);
	var c = 0;
	if(a==b) var c = a*a;
	else{
		if(a>b) c = b;
		else c = a;
	} 

	return c;
}

var k = compare();
document.write(k);