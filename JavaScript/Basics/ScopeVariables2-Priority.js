var a = 2;

function fun(){
	document.write(a, "<br>"); 
	a = 3;
	document.write(a, "<br>"); //console.log(a);
}

document.write(a, "<br>"); //console.log(a); //prints 2 due to global defination of 'a'
fun();	// updates the value of 'a' to 3 and prints it from inside of function 'fun()'
document.write(a, "<br>"); //console.log(a); // prints 3 as the priority of defination of 'a' as a local variable is more. 