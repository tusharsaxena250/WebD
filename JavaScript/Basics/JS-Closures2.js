function password(){
	var pass = "ABCD";
	var key = 36;

	function validate(){
		var a = prompt('Enter your password!');
		console.log('Password inserted', a);

		if(a==pass){
			document.write('Login Sucessful!');
		}
		else{
			var s = prompt("Enter security key!");
			if(s==key){
				console.log('Your password is ', pass);
				document.write('Login Sucessful')
			}else{
				console.log('Invalid Key');
				return;
			}
		}	
	}
	return validate;
}

var check = password();
check();