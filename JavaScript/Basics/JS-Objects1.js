function Triangle(a, b, c){
	this.a = a;
	this.b = b;
	this.c = c;
}

var shape = new Object();
shape.type = 'triangle';
shape.getType = function() {
	return this.type;
}


//Triangle.prototype = shape;
//Triangle.type = "triangle";

Triangle.prototype.getPerimeter = function() {
	return (this.a+this.b+this.c);
}

var t = new Triangle(1, 2, 3);

console.log(t.constructor === Triangle);
//console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
//console.log(t.getType());