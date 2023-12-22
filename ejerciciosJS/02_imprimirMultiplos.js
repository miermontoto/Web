function imprimirMultiplos() {
	var nmut = document.getElementById("nmut").value;
	var inicial = document.getElementById("inicial").value;
	var msgs = document.getElementById("msgs");
	var msg = "";
	var i;

	if (inicial === "") {
		msg = "El campo inicial no puede estar vacío";
	} else {
		for (i = 0; i < nmut; i++) {
			msg += inicial + " x " + (i + 1) + " = " + (inicial * (i + 1)) + "<br/>";
		}
	}

	msgs.innerHTML = msg;
}

function init() {
	document.getElementsByTagName("form")[0].onsubmit = function () {
		imprimirMultiplos();
		return false;
	};
}

window.onload = init;
