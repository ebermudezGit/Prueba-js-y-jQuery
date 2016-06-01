var suma = 0;
do{
 var ingreso = prompt("ingresa un número");
 if(!isNaN(ingreso)){
 	suma=suma+parseInt(ingreso);
 }
}while (ingreso != "fin");
console.log(suma);
document.write("La respuesta es: "+suma);
