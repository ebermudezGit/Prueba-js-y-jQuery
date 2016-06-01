$(document).ready(function() {
		var cuentaElementos=5
		$("#button1").click(function(event) {
			cuentaElementos++;
			$("#lista").append("<li>"+cuentaElementos+"</li>");
		});
		$("#button2").click(function(event) {
			$("#lista li:first-child").remove();
		});

}); 	