function onRegister(oEvent) {
	var termsCb = document.getElementById("termsCb").checked;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var course = document.getElementById("course").selectedOptions[0].innerText;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("phone").value.trim();
	var email = document.getElementById("email").value;
	var psw = document.getElementById("psw").value;
	var psw_repeat = document.getElementById("psw_repeat").value;

	if(fname.trim() === "" || lname.trim() === "" || phone.trim() === "" || address === "" 
		|| email.trim() === "" || psw.trim() === "" || psw_repeat.trim() === "") {
		window.alert("Validation errors in UI; Please check them");
		return;
	}
	
	if(!this.selectedGender) {
		window.alert("Please select a gender");
		return;
	}
	
	if(psw === psw_repeat) {
		if(!termsCb) {
			window.alert("Please accept terms and conditions");
			return;
		}
		window.alert("User with name: " + fname + " " + lname + " is now registered");
		document.getElementById("basicForm").reset();
	} else {
		window.alert("Both passwords does not match");
		return;
	}
}

function onRadioClick(oRadio) {
	this.selectedGender = oRadio.value;
}