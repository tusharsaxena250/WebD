function verbing(s){
	if(s.length>=3){
		if(s.substr(-3)!="ing")
		document.write(s.concat("","ing"));
	else if(s.substr(-3)=="ing")
		document.write(s.concat("","ly"));
	}
	else
		document.write(s);
}

var s = prompt("Enter a String");
verbing(s);