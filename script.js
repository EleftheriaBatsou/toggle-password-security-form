function togglePassword() {
  //target the ids from html [upass and toggleBtn]
	var upass = document.getElementById('upass');
	var toggleBtn = document.getElementById('toggleBtn');
  //access what has been typed 
	if(upass.type == "password"){
    //run code if type is password
		upass.type = "text"; //change to text type in order to see the password
    //target the value to change in html
		toggleBtn.value = "Hide Password Characters";
	} else {
    //run code if type is text
		upass.type = "password"; //change to password type so to hide the password
    //target the value to change in html
		toggleBtn.value = "Show Password Characters";
	}
}