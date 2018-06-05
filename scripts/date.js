function getDate() {
	var year = new Date().getFullYear();
	document.getElementById("currentYear").innerHTML = year;
}

getDate();