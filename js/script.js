var username = document.getElementById('username'),
	password = document.getElementById('password'),
	confirm = document.getElementById('confirm')
	email = document.getElementById('email'),
	form = document.getElementById('form'),
	errorMsg = document.getElementById('error');


form.addEventListener('submit', function(event) {
	let messages = [];

	if (username.value === "" || username.value == null) {
		messages.push("*Username is required!");
	} else if (username.value.length <= 5) {
		messages.push("*Username must be at least 6 characters!");
	}

	if (password.value === "" || password.value == null) {
		messages.push("*Password is required!")
	} else if (password.value.length <= 6) {
		messages.push("*Password must be longer than 6 characters!");
	} else if (password.value === "password" || password.value === "Password") {
		messages.push("*The word Password cannot be your password!")
	}

	if (confirm.value != password.value) {
		messages.push("*Passwords must match!");
	}

	if (email.value === "" || email.value == null) {
		messages.push("*E-mail is required!");
	}

	if (messages.length > 0) {
		event.preventDefault();
		errorMsg.innerText = messages.join("\n");
		errorMsg.style.display = "block";
	} else {
		alert("You have successfully registered!")
		return true;
	}

function ValidateEmail(mail) {
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
    return true;
    }
    messages.push("You have entered an invalid email address!");
    return false;
	}

});