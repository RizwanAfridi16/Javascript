function calculateAge() {
	var birthDate = new Date(document.getElementById("birth-date").value);
	var currentDate = new Date();
	var age = currentDate.getFullYear() - birthDate.getFullYear();
	var month = currentDate.getMonth() - birthDate.getMonth();
	if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
		age--;
	}

	document.getElementById("result").innerHTML = "You are " + age + " years old.";
}
