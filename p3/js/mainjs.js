function telefono(numero, marca, color) {
 
    //Propiedades privadas
    var contadorLlamadas=0;

    //Propiedades públicas
    this._numero = numero;
    this._marca = marca;
    this._color = color;

    //Métodos privados

    //Métodos públicos
    this.marcar = function(numeroMarcar) {
        contadorLlamadas++;
        return numeroMarcar;
    };

    this.contadordeLlamadas = function() {
        return contadorLlamadas;
    };
}

var mytelefono = new telefono("00000","StarLight","Negro");

function marcar(){
    var numeroTelefono =document.getElementById("numeroTelefono").value;
    document.getElementById("respuesta").innerHTML = "A marcado al siguiente numero: "+mytelefono.marcar(numeroTelefono);    
}

function verdatos(){
    document.getElementById("respuesta").innerHTML = "Numero:"+mytelefono._numero+ " Marca:" +mytelefono._marca+ " Color:" +mytelefono._color;
}

function llamadasRealizadas(){
    document.getElementById("respuesta").innerHTML = "Llamadas Realizadas: " + mytelefono.contadordeLlamadas();
}