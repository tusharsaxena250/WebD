function outerFunc(){
	var lex = {1:"Sunday", 2:"Monday", 3:"Tuesday", 4:"Wednesday", 5:"Thursday", 6:"Friday", 7:"Saturday"};
	function innerFunc(){
		var a = prompt('Enter day number [1-7]');
		console.log(lex[a]);
	}
	return innerFunc;
}

var func = outerFunc();
func();

