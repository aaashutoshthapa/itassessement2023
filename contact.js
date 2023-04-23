function validateForm() {
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var message = document.forms["contactForm"]["message"].value;

	if (name == "") {
		alert("Please enter your name.");
		return false;
	}

	if (email == "") {
		alert("Please enter your email address.");
		return false;
	}

	if (message == "") {
		alert("Please enter your message.");
		return false;
	}

	return true;
}
