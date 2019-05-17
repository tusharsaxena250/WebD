function mixUp(str1, str2){
	var a = str1.slice(0, 2);
	var b = str2.slice(0, 2);
	var c = str1.slice(2, );
	var d = str2.slice(2, );
	document.write(b.concat(c), " ", a.concat(d));
}
var s = prompt("Enter string 1");
var t = prompt("Enter string 2");

mixUp(s, t);