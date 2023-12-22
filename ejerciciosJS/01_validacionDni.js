function init() {
	let form = document.querySelector("form");
	form.onsubmit = function () {
		validarDni();
		return false;
	};
}

window.addEventListener("load", init);

function validarDni() {
	const msgs = document.getElementById("msgs");

	let dni = document.getElementById("dni").value;

	// si el dni no tiene 9 caracteres
	if (dni.length != 9) {
		msgs.innerHTML = "El dni debe tener 9 caracteres";
		return;
	}

	// si el dni no tiene 8 numeros y una letra
	let numeros = dni.substring(0, 8);
	let letra = dni.substring(8, 9);
	if (isNaN(numeros) || !isNaN(letra)) {
		msgs.innerHTML = "El dni debe tener 8 numeros y una letra";
		return;
	}

	// si la letra no es correcta
	let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
	let posicion = numeros % 23;
	let letraCorrecta = letras.substring(posicion, posicion + 1);
	if (letra != letraCorrecta) {
		msgs.innerHTML = "La letra no es correcta";
		return;
	}

	msgs.innerHTML = "El dni es correcto";
}
